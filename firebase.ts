// import dependencies for Firebase
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiIo7HBLjGdHl9bxW8hOcZc0VE43eKBIs",
  authDomain: "chasegpt-ba966.firebaseapp.com",
  projectId: "chasegpt-ba966",
  storageBucket: "chasegpt-ba966.appspot.com",
  messagingSenderId: "1083182808057",
  appId: "1:1083182808057:web:62f3ad20fd9c16b99c5b28",
};

// Initialize Firebase
// React approach: Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Next.js approach: getApp if there is already an app, otherwise initializeApp
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
