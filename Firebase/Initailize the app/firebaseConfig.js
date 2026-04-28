import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
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

export { doc, setDoc }