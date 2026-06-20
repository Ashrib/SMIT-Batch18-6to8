import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { signInWithEmailAndPassword,deleteUser, signOut, getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { query, where, onSnapshot, deleteDoc, doc, setDoc, getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth,deleteUser, signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged, createUserWithEmailAndPassword, onSnapshot, doc, setDoc, db, addDoc, collection, getDocs, deleteDoc, where, query }