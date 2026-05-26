// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl2G7RnXDJXTW1v5ed_1ke4_p0uWEFJHM",
  authDomain: "probartan-coaching.firebaseapp.com",
  projectId: "probartan-coaching",
  storageBucket: "probartan-coaching.firebasestorage.app",
  messagingSenderId: "421905200674",
  appId: "1:421905200674:web:987face741dd12632dfc7b",
  measurementId: "G-22HCSY8JF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;