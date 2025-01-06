// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY-SKQ3aYfUDN58GwDHpo3PXxHRt5EhVI",
  authDomain: "chat-app-ed299.firebaseapp.com",
  projectId: "chat-app-ed299",
  storageBucket: "chat-app-ed299.firebasestorage.app",
  messagingSenderId: "724430877399",
  appId: "1:724430877399:web:6fc9b9f993fa2475563692",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
