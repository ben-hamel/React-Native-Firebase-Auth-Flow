import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { auth } from "../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const SignUpScreen = ({ navigation }) => {
  // const [userSignIn, setUserSignIn] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getRandomPic = async () => {
    const picApiResponse = await fetch("https://randomuser.me/api/");
    const data = await picApiResponse.json(); //https://developer.mozilla.org/en-US/docs/Web/API/Response/json
    return data.results[0].picture.large;
  };

  const RegisterUser = async () => {
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docRef = await addDoc(collection(db, "users"), {
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomPic(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="username"
        value={username}
        autoCapitalize="none"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="email"
        value={email}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        value={password}
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={RegisterUser} />
      <Button
        title={"back to login screen"}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
