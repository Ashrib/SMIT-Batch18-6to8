import { doc, db, addDoc, collection, getDocs, deleteDoc, setDoc } from './firebaseConfig.js'

let users = [];
let addBtn = document.querySelector('#add-btn');
let updateBtn = document.querySelector('#update-btn');
let input = document.querySelector('#user-name');
let usersDiv = document.querySelector('.users-container');
let editUserId = null;


// CRUD

let updateUser = async () => {

    try {
        if (!editUserId) {
            console.error(new Error('user id to update user not exist!'));
            return;
        }

        let updatedUsername = input.value;
        console.log(updatedUsername)
        // Add a new document in collection "cities"
        await setDoc(doc(db, "users", editUserId), {  // update --> method: POST
            username: updatedUsername,
            dataUpdated: true,
        });
        console.log("User updated!")
        input.value = ''
        addBtn.style.display = 'flex';
        updateBtn.style.display = 'none';
        editUserId = null;
        // re-fetch users for the updated data
        fetchUsers().then(() => {
            renderUsers()
        })

    } catch (error) {
        console.error('error while updating user!', error);

    }
}


let deleteUser = async (userId) => {
    try {
        await deleteDoc(doc(db, "users", userId));
        console.log('user deleted!')
    } catch (error) {
        console.error(error)
    }
}


let editUser = async (userId) => {
    console.log('user edit id => ', userId);

    let findUser = users.find((user) => userId == user.uid);
    console.log(findUser);

    if (!findUser) {
        console.error(new Error("user doesn't exist!"));
        return;
    }
    input.value = findUser.username;
    addBtn.style.display = 'none';
    updateBtn.style.display = 'flex';
    editUserId = userId;
}

let renderUsers = () => {
    usersDiv.innerHTML = ''
    users.map((user) => {

        let userCard = document.createElement('div');
        userCard.id = user.uid
        userCard.className = 'user-card'
        userCard.innerHTML = `
        <h2>${user.username}</h2>
        <button class='userEdit-btn'
        >edit</button>
        <button class='userDelete-btn'
        >delete</button>
       `;
        userCard.querySelector('.userDelete-btn')
            .addEventListener('click', () => deleteUser(user.uid))

        userCard.querySelector('.userEdit-btn')
            .addEventListener('click', () => editUser(user.uid))

        usersDiv.appendChild(userCard)
    })
}



addBtn.addEventListener('click', async () => {  /// Create
    try {
        const docRef = await addDoc(collection(db, "users"), {
            username: input.value,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error(error);
    }
})


updateBtn.addEventListener('click', () => updateUser())



// fetch users data
let fetchUsers = async () => { /// Read data
    try {
        users = []
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            users.push({
                uid: doc.id,
                ...doc.data(),
            });
        });

        console.log('users => ', users)

    } catch (error) {
        console.error(error);
    }

}


fetchUsers().then(() => {

    renderUsers()
})



/// method : POST  --> body {}
/// method : GET


/// CRUD