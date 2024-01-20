// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0jnqYjdca8IVZztuv0-xGvZKQ2bmh2k",
  authDomain: "react-ecommerce-a3c3d.firebaseapp.com",
  projectId: "react-ecommerce-a3c3d",
  storageBucket: "react-ecommerce-a3c3d.appspot.com",
  messagingSenderId: "386169694267",
  appId: "1:386169694267:web:76241dc5328e3e6989541e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth(app);