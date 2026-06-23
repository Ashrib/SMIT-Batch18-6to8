import { requireGuest } from "./auth-guard.js";
import { addDoc, auth, collection, db, deleteDoc, deleteUser, doc, getAuth, getDocs, onAuthStateChanged, query, serverTimestamp, signOut, updateDoc, where } from "./firebaseConfig.js"

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


let editPost = (id) => {
    try {
        console.log('editing post id =>', id);
        let editPostInp = document.getElementById(`${id}`)
        editPostInp.removeAttribute('disabled')
        console.log(editPostInp.nextSibling.nextSibling)
        editPostInp.nextSibling.nextSibling.style.display = 'block'
        document.getElementById(`btnBox-${id}`).style.display = 'none'


    } catch (error) {
        console.error(error)
    }
}

let updatePost = async (id) => {
    try {
        let editPostInp = document.getElementById(`${id}`)
        console.log(editPostInp);
        console.log(editPostInp.value);

        let timeStampData = serverTimestamp();

        // update the post using id
        await updateDoc(doc(db, 'posts', id), {
            text: editPostInp.value,
            timestamp: timeStampData,
        }).then(() => {
            console.log("post successfully updated with id =>", id);
            editPostInp.setAttribute('disabled', 'true')
            editPostInp.nextSibling.nextSibling.style.display = 'none' /// update
            document.getElementById(`btnBox-${id}`).style.display = 'block' // del and edit
            //// find the obj to be updated
            let dataToUpdate = posts.find((item) => item.id == id);
            dataToUpdate = {  /// update the obj post, locally
                ...dataToUpdate,
                text: editPostInp.value,
                timestamp: timeStampData,
            }

            console.log("after update find obj => ", dataToUpdate)
            console.log('===== post array not updated ============')
            console.log(posts)

            let copyPosts = posts.filter((post) => post.id !== id); /// filter posts without the obj to be updated
            posts = [
                ...copyPosts, /// spread the whole array
                dataToUpdate, /// insert a new updated obj data
            ]
            console.log('===== post array after updated ============')
            console.log(posts);

            renderPosts();
        })


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
         <div >
         <input id='${post?.id}' type='text' value='${post?.text}' disabled/>
         <button type="button" class=' btn btn-danger update-btn' style='display:none;'>update</button>
         </div>
        <div id='btnBox-${post.id}'>  
            <button type="button" class="btn btn-primary del-btn" >delete</button>
            <button type="button" class="btn btn-primary edit-btn" >edit</button>
        </div>

        ${post?.timestamp ? `<span style='color:blue;'>updated</span>` : '<span></span>'}
            
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        
        `

        postDiv.querySelector('.del-btn').addEventListener('click', () => deletePost(post?.id))
        postDiv.querySelector('.edit-btn').addEventListener('click', () => editPost(post?.id))
        postDiv.querySelector('.update-btn').addEventListener('click', () => updatePost(post?.id))

        postsMain.appendChild(postDiv)
    })
}

getUserPosts().then(() => renderPosts())

deleteAccBtn.addEventListener("click", () => deleteUserAccount())

signOutBtn.addEventListener("click", () => userSignOut())

postBtn.addEventListener("click", () => createPost())







