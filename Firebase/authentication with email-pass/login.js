import { requireAuth } from "./auth-guard.js";
import { auth, signInWithEmailAndPassword } from "./firebaseConfig.js";

let emailInput = document.querySelector("#email-inp");
let passInput = document.querySelector("#password-inp");
let loginForm = document.querySelector("#login-form");

requireAuth(); /// to check user logged-in or not



let validateForm = ()=>{
    if(emailInput.value.length < 1 || passInput.value.length < 1){
        console.error(new Error("all fields must be filled!"))
        return false
    }

    return true;
}



let loginUser = async () => {
    try {
        if(!validateForm()){
            console.error(new Error('user can not login!'))
            return
        }

        await signInWithEmailAndPassword(auth, emailInput.value, passInput.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("success on login")
                console.log("userCredential =>", user);

                window.location.replace('./dashboard.html')
            });

    } catch (error) {
        console.error(error)
    }
}


loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    loginUser()
})


