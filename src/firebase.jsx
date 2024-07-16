import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-fc674.firebaseapp.com",
  projectId: "store-tutorial-fc674",
  storageBucket: "store-tutorial-fc674.appspot.com",
  messagingSenderId: "210957148276",
  appId: "1:210957148276:web:f093c87b4e4bed37b1f121"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);