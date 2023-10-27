// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "foody-15970.firebaseapp.com",
  projectId: "foody-15970",
  storageBucket: "foody-15970.appspot.com",
  messagingSenderId: "809878665489",
  appId: "1:809878665489:web:a9a0473bdc0e35f049f4b0",
  measurementId: "G-MK12GHJ3Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
