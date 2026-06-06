import { auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "./firebaseConfig.js";

let emailInput = document.querySelector("#email-inp");
let passInput = document.querySelector("#password-inp");
let registerForm = document.querySelector("#register-form");

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        console.log(user)
        window.location.replace('./pages/dashboard.html')

    } else {
        // User is signed out
        // ...
        console.log("signed out");

    }
});



let validateForm = ()=>{
    if(emailInput.value.length < 1 || passInput.value.length < 1){
        console.error(new Error("all fields must be filled!"))
        return false
    }

    return true;
}

let createUser = async () => {
    try {
        if(!validateForm()){
            console.error(new Error('user account can not be created!'))
            return
        }

        await createUserWithEmailAndPassword(auth, emailInput.value, passInput.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("success")
                console.log("userCredential =>", user);

                window.location.replace('./pages/dashboard.html')
            });

    } catch (error) {
        console.error(error)
    }
}


registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    createUser()
})

