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


