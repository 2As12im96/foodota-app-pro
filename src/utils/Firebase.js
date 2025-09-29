// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth , GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwk6ebJMnBnvPHlwFBA5nX89zTHUp6BoA",
  authDomain: "foodota-287d5.firebaseapp.com",
  projectId: "foodota-287d5",
  storageBucket: "foodota-287d5.firebasestorage.app",
  messagingSenderId: "42599682305",
  appId: "1:42599682305:web:14182ad47f6ebf7b574b00",
  measurementId: "G-CD2SGC9YP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth , provider};



/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwk6ebJMnBnvPHlwFBA5nX89zTHUp6BoA",
  authDomain: "foodota-287d5.firebaseapp.com",
  projectId: "foodota-287d5",
  storageBucket: "foodota-287d5.firebasestorage.app",
  messagingSenderId: "42599682305",
  appId: "1:42599682305:web:14182ad47f6ebf7b574b00",
  measurementId: "G-CD2SGC9YP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/