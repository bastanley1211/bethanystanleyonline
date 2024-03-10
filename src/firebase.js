// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSCfxlW-XzOlfIDswixjz0zFRKyOdhRk8",
  authDomain: "matcha-press.firebaseapp.com",
  projectId: "matcha-press",
  storageBucket: "matcha-press.appspot.com",
  messagingSenderId: "1033348402429",
  appId: "1:1033348402429:web:a502c4efb0944e5f9f8294",
  measurementId: "G-KJGZS48MB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);