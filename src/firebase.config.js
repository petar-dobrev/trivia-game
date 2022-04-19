// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJMm1slFdAekwAm7b05Pkx_yyBeb7AE9s",
  authDomain: "trivia-game-4d2c1.firebaseapp.com",
  projectId: "trivia-game-4d2c1",
  storageBucket: "trivia-game-4d2c1.appspot.com",
  messagingSenderId: "710783349099",
  appId: "1:710783349099:web:8934afdda6e4d975885c2e",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
