import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { onSnapshot, deleteDoc, doc, setDoc, getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 ///
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service

const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const provider = new GoogleAuthProvider();

export { provider,getAuth, GoogleAuthProvider, signInWithPopup,onSnapshot, doc, setDoc, db, addDoc, collection, getDocs, deleteDoc }
