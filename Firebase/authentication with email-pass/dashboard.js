import { requireGuest } from "./auth-guard.js";
import { addDoc, auth, collection, db, deleteDoc, deleteUser, doc, getAuth, getDocs, onAuthStateChanged, query, signOut, where } from "./firebaseConfig.js"

let postsMain = document.querySelector(".posts-main");
let signOutBtn = document.querySelector("#signOut-btn");
let deleteAccBtn = document.querySelector("#deleteAcc-btn");
let postBtn = document.querySelector("#post-btn");
let postInp = document.querySelector("#post-inp");
let currentUserData = null;
let userId = null;
let posts = [];

// requireGuest(); /// auth-guard check

/// get uid from localstorage
let getUserfromLocalStorage = () => {
    userId = JSON.parse(window.localStorage.getItem("uid"));
    console.log("uid = >", userId)
}
getUserfromLocalStorage();

/// detele user data from db
let deleteUserFromDb = async () => {
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
            deleteUserFromDb().then(() => {
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
            currentUserData = { id: doc.id, ...doc.data() }
        });
    } catch (error) {
        console.error(new Error('error in getting user data from db'));
        console.error(error);

    }
}
getUser().then(() => {

    console.log(currentUserData)
})



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


let createPost = async () => {
    try {
        if (postInp.value.length < 1) {
            console.error(new Error("post text field must be filled!"));
            return
        }

        let newDate = new Date();
        let docRef = await addDoc(collection(db, "posts"), {  /// post
            text: postInp.value,
            uid: userId, /// foreign
            post_id: newDate.getTime(), /// as primary key
        })
        console.log("post successfully add with doc_id => ", docRef.id);

    } catch (error) {
        console.error(error)
    }
}



let getUserPosts = async () => {
    try {
        const queryPost = query(
            collection(db, 'posts'),
            where("uid", "==", userId)
        )

        let querySnapshot = await getDocs(queryPost);
        querySnapshot.forEach((post) => {
            posts = [
                ...posts,  ///
                { id: post.id, ...post.data() }
            ]
        })

        console.log(posts)
    } catch (error) {
        console.error(error)
    }
}


let renderPosts = () => {
    posts.map((post) => {
        postsMain.innerHTML += `<div class='post'>
    ${post?.text}
    </div>`
    })
}

getUserPosts().then(()=>renderPosts())

deleteAccBtn.addEventListener("click", () => deleteUserAccount())

signOutBtn.addEventListener("click", () => userSignOut())

postBtn.addEventListener("click", () => createPost())







