import { getCurrentUser, requireGuest } from "./auth-guard.js";
import { auth, getAuth, onAuthStateChanged, signOut } from "./firebaseConfig.js"

let signOutBtn = document.querySelector("#signOut-btn");
let currentUser = null

requireGuest(); /// auth-guard check




// sign out
let userSignOut = async() => {
    await signOut(auth).then(() => {
        // Sign-out successful.
        console.log('success on sign out')
    }).catch((error) => {
        // An error happened.
        console.log('error on sign out => ', error)
    });
}

signOutBtn.addEventListener("click", ()=> userSignOut())