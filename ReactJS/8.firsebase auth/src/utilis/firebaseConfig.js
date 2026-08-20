// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArV9tAE7qKNF0ub1XPKquHIzpcNYEJKvo",
  authDomain: "ecommerce-app-3406e.firebaseapp.com",
  projectId: "ecommerce-app-3406e",
  storageBucket: "ecommerce-app-3406e.firebasestorage.app",
  messagingSenderId: "602246520437",
  appId: "1:602246520437:web:f8ab3d2edde73a4a2e623c",
  measurementId: "G-4LRXLQR7PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {db, auth}