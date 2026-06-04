import { auth, createUserWithEmailAndPassword } from "./firebaseConfig.js";

let emailInput = document.querySelector("#email-inp");
let passInput = document.querySelector("#password-inp");
let registerForm = document.querySelector("#register-form");

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
            });

    } catch (error) {
        console.error(error)
    }
}


registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    createUser()
})