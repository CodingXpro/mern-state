// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hello-efede.firebaseapp.com",
  projectId: "hello-efede",
  storageBucket: "hello-efede.appspot.com",
  messagingSenderId: "272959683152",
  appId: "1:272959683152:web:0285d4ee12e2aafae1af55",
  measurementId: "G-376FF0JWJK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);