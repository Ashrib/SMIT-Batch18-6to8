import { auth, getAuth, onAuthStateChanged, signOut } from "../firebaseConfig.js"

console.log("dashboard")

let signOutBtn = document.querySelector("#signOut-btn");


onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        console.log(user)
    } else {
        // User is signed out
        // ...
        console.log("signed out");
        window.location.replace('../index.html')

    }
});


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