
import { collection, getAuth, getDocs, GoogleAuthProvider, provider, signInWithPopup } from './firebaseConfig.js'

let googleBtn = document.querySelector("#google-btn");


const auth = getAuth();


let googleSignIn = async () => {
    try {

        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
               const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...


                /// query uid
                // const q = query(
                //     collection(db,'users'),
                //     where("uid", "==", user.uid)
                // )
                // const querySnapshot = await getDocs(q);

                // if(querySnapshot){
                    /// no need to add user in db
                    // return
                // }
            /// db user add


                console.log("crediential => ", credential)
                console.log("token => ", token)
                console.log("user => ", user)
            })
    } catch (error) {
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(error)
        console.error(credential)

    }
}


googleBtn.addEventListener("click", ()=> googleSignIn());