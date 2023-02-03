// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA405H8rnTbL8-t0l__Qmp7TZzk3onurcc",
  authDomain: "login-riska.firebaseapp.com",
  projectId: "login-riska",
  storageBucket: "login-riska.appspot.com",
  messagingSenderId: "4562150750",
  appId: "1:4562150750:web:65e45f352027adc887dbcf",
  measurementId: "G-Z1MFHCDXMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth