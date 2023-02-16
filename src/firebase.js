// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { signInAnonymously, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvBMaPfVFT0M8Mtc-2m8FeYWlop1W1eF4",
  authDomain: "cpyall.firebaseapp.com",
  projectId: "cpyall",
  storageBucket: "cpyall.appspot.com",
  messagingSenderId: "826602510488",
  appId: "1:826602510488:web:f181d4cf81711bdd7ad8ed",
  measurementId: "G-4VEBBS1W1L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
