
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAowk3qhgKXXzG8bEUE7PXNJWjqkffgjbc",
  authDomain: "yoga-a19f2.firebaseapp.com",
  projectId: "yoga-a19f2",
  storageBucket: "yoga-a19f2.appspot.com",
  messagingSenderId: "307204376251",
  appId: "1:307204376251:web:b2b0ea759d154195ca4b9e"
};

const app = initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export default app;

