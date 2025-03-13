// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdZDqVZq7kKjyUp5qOk7M6Bp5Qdb59S1U",
  authDomain: "filmflexgpt.firebaseapp.com",
  projectId: "filmflexgpt",
  storageBucket: "filmflexgpt.firebasestorage.app",
  messagingSenderId: "96921757350",
  appId: "1:96921757350:web:238b7134dfe74e57273667",
  measurementId: "G-WWVKM4DK5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();