# Welcome to react-native-firebase-auth-flow 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

A user auth flow for a React Native app using Firebase for authorization and Firestore database for the backend. This repo is a sample from a current social media app I'm building to help teach me these two technologies.

# Run project in development

## Environment Setup

<https://reactnative.dev/docs/environment-setup>.

## Install dependencies

```sh
npm install
```

## Create Firebase app and add to project

1. Create a firebase app, watch this [video](https://www.youtube.com/watch?v=13eja_RYimU&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=3&ab_channel=TheNetNinja) for help.
2. Setup Auth email and password auth, watch this [video](https://www.youtube.com/watch?v=n-kUZw97-lA&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=11&ab_channel=TheNetNinja) for help.
3. create a `.env` and add your Firebase config key, ex:

```shell
# Replace XXXX's with your own Firebase config keys
API_KEY=XXXX
AUTH_DOMAIN=XXXX
PROJECT_ID=XXXX
STORAGE_BUCKET=XXXX
MESSAGING_SENDER_ID=XXXX
APP_ID=XXXX
```

## Run Expo to startup app

```sh
expo start
```

# Steps Involved

- Researched Redux vs Reacts context API and decided on context API due to the state being simple enough to handle using a context provider. I learned that it's best to bring in Redux once your app's state gets too hard to manage.
- Learned that Expo with Firebase JavaScript SDK is suitable for a learning project, but you should use a barebones Expo workflow with the React-Native-Firebase library for production-ready projects. Using this will make your app faster and allow you to use the full features of the Firebase SDK; Firebase [officially recommends](https://firebase.google.com/docs/firestore/library-integrations) the [React Native Firebase repo](https://rnfirebase.io/firestore/usage).

# Future Steps

- Style the UI for the auth screens.
- Research Formik to see if this will make the app login forms more secure.
