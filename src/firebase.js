import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOFDM2oR8qkyneO6VJX1XQD6dubKhNV9U",
  authDomain: "chathub-326c9.firebaseapp.com",
  projectId: "chathub-326c9",
  storageBucket: "chathub-326c9.appspot.com",
  messagingSenderId: "503281004503",
  appId: "1:503281004503:web:db7b98575af9f85e052592"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()