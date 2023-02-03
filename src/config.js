// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhYd27jyyfaag3-2BUpfJ-RJjgutXDRjg",
    authDomain: "login-85b9f.firebaseapp.com",
    projectId: "login-85b9f",
    storageBucket: "login-85b9f.appspot.com",
    messagingSenderId: "408111748523",
    appId: "1:408111748523:web:8d2e268efd2956a7d52eee",
    measurementId: "G-Z8Q1R2E5GG"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth