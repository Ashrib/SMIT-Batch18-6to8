import { requireAuth } from "./auth-guard.js";
import { addDoc, auth, collection, createUserWithEmailAndPassword, db, getAuth, onAuthStateChanged } from "./firebaseConfig.js";

let emailInput = document.querySelector("#email-inp");
let passInput = document.querySelector("#password-inp");
let registerForm = document.querySelector("#register-form");

requireAuth(); ///  check user exist or not, if exist then navigate to dashboard

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

                //// add doc in users collection

                // addDoc(collection(db, 'users'), {
                //     uid: user?.uid,
                //     displayName: user?.displayName,
                //     email: user?.email,
                //     phoneNumber: user?.phoneNumber
                // }).then(()=>{
                //     console.log("user stored in db")
                //     window.location.replace("./dashboard.html")
                // })

                
            });

    } catch (error) {
        console.error(error)
    }
}


registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    createUser()
})

