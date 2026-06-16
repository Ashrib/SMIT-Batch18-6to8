import { requireGuest } from "./auth-guard.js";
import { auth, collection, db, deleteDoc, deleteUser, doc, getAuth, getDocs, onAuthStateChanged, query, signOut, where } from "./firebaseConfig.js"

let signOutBtn = document.querySelector("#signOut-btn");
let deleteAccBtn = document.querySelector("#deleteAcc-btn");
let currentUserData = null;
let userId = null;

// requireGuest(); /// auth-guard check

/// get uid from localstorage
let getUserfromLocalStorage = () => {
    userId = JSON.parse(window.localStorage.getItem("uid"));
    console.log("uid = >", userId)
}
getUserfromLocalStorage();

/// detele user data from db
let deleteUserFromDb = async()=>{
    try {
        await deleteDoc(doc(db, "users", currentUserData.id));
        console.log("successfully user deleted from db.")
    } catch (error) {
        console.error(new Error("error in deleting user from db."))
        console.error(error)
    }
}


/// detele user account
let deleteUserAccount = async () => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;

        await deleteUser(user).then(() => {  /// delete from authenication
            console.log("successfully account delete.");
            deleteUserFromDb().then(()=>{
                window.location.replace("./index.html")
            })
        })
    } catch (error) {
        console.error(new Error("can't delete user account"));
        console.error(error)
    }
}

// get user from db using uid
let getUser = async () => {
    try {
        const q = query(collection(db, "users"), where("uid", "==", userId));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            currentUserData = {id: doc.id ,...doc.data()}
        });
    } catch (error) {
        console.error(new Error('error in getting user data from db'));
        console.error(error);

    }
}
getUser().then(()=>{

    console.log(currentUserData)
})

deleteAccBtn.addEventListener("click", () => deleteUserAccount())


// sign out
let userSignOut = async () => {
    await signOut(auth).then(() => {
        // Sign-out successful.
        console.log('success on sign out')
    }).catch((error) => {
        // An error happened.
        console.log('error on sign out => ', error)
    });
}

signOutBtn.addEventListener("click", () => userSignOut())