import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSijhz_RxgEnjaIQJtlk2LFbUnro40z3A",
  authDomain: "chathub-c522f.firebaseapp.com",
  projectId: "chathub-c522f",
  storageBucket: "chathub-c522f.appspot.com",
  messagingSenderId: "265332417203",
  appId: "1:265332417203:web:097b2768d86c80988d86c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()