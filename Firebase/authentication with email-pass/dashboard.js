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
        let newPostData = {  /// post
            text: postInp.value,
            uid: userId, /// foreign
            post_id: newDate.getTime(), /// as primary key
        }
        let docRef = await addDoc(collection(db, "posts"), newPostData)
        console.log("post successfully add with doc_id => ", docRef.id);
        posts = [...posts,
        { ...newPostData, id: docRef.id }
        ]
        renderPosts()
    } catch (error) {
        console.error(error)
    }
}



let getUserPosts = async () => {
    try {
        const queryPost = query(
            collection(db, 'posts'),
            where("uid", "==", userId)
        );

        let querySnapshot = await getDocs(queryPost);
        querySnapshot.forEach((post) => {
            posts = [
                ...posts,  ///
                { id: post.id, ...post.data() }
            ]
        });

        console.log(posts)
    } catch (error) {
        console.error(error)
    }
}


let deletePost = async (id) => {
    try {
        console.log("delete post id => ", id)
        if (!id) {
            console.log("id not found to delete the post!");
            return;
        }

        await deleteDoc(doc(db, 'posts', id)).then(() => {
            console.log('post deleted successfully.');

            posts = posts.filter((post) => post.id != id); /// []
            renderPosts()
        })



    } catch (error) {
        console.error(new Error("can not delete the post"));
        console.error(error);

    }



}


let editPost = async (id) => {
    try {
        console.log('editing post id =>', id);
        let editPostInp = document.getElementById(`${id}`)
        editPostInp.removeAttribute('disabled')
        console.log(editPostInp)
        document.getElementById(`btnBox-${id}`).style.display = 'none'


    } catch (error) {
        console.error(error)
    }
}

let renderPosts = () => {
    postsMain.innerHTML = ``;

    if (posts.length < 1) { //// no post yet
        postsMain.innerHTML = `<div class='post'> no posts</div>`
        return
    }


    posts.map((post) => {
        let postDiv = document.createElement("div");
        postDiv.className = 'post';
        postDiv.innerHTML = `
         <div>
         <input id='${post?.id}' type='text' value='${post?.text}' disabled/>
         <button class='update-btn' style='display:none;'>update</button>
         </div>
        <div id='btnBox-${post.id}'>  
            <button class='del-btn'>delete</button>
            <button class='edit-btn'>edit</button>
        </div>
            `

        postDiv.querySelector('.del-btn').addEventListener('click', () => deletePost(post?.id))
        postDiv.querySelector('.edit-btn').addEventListener('click', () => editPost(post?.id))

        postsMain.appendChild(postDiv)
    })
}

getUserPosts().then(() => renderPosts())

deleteAccBtn.addEventListener("click", () => deleteUserAccount())

signOutBtn.addEventListener("click", () => userSignOut())

postBtn.addEventListener("click", () => createPost())







