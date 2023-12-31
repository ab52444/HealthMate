import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; 
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

let firebaseApp;

export const getFirebaseApp = () => {
  // If the Firebase app is already initialized, return it
  if (firebaseApp) {
    return firebaseApp;
  }

  // Firebase configuration
   const firebaseConfig = {
  apiKey: "AIzaSyDN5eXywBwLMcYnO6gUXugOz63iWrHJcWg",
  authDomain: "healthmate-e676e.firebaseapp.com",
  projectId: "healthmate-e676e",
  storageBucket: "healthmate-e676e.appspot.com",
  messagingSenderId: "73773216191",
  appId: "1:73773216191:web:185f13a22d3251e217710a"
    };

  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  // Initialize Firebase Auth with React Native persistence
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  // Store the initialized app to avoid reinitialization
  firebaseApp = app;

  return app;
};

