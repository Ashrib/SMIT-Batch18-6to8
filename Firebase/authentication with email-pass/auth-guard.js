import { auth, onAuthStateChanged } from "./firebaseConfig.js";

let currentUser = null;

export function requireAuth() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.replace('dashboard.html')
        }
    });
}


export function requireGuest() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.replace('index.html')
        }

    });
}



export function getCurrentUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.uid)
            console.log(user.email)
            return user.email
            // return {
            //      displayName: user.displayName,
            //      email: user.email,
            //      photoURL: user.photoURL,
            //      emailVerified: user.emailVerified,
            //      uid: user.uid,
            // }
        }

    });
}
