import { doc, db, addDoc, collection, getDocs,deleteDoc } from './firebaseConfig.js'

let users = [];
let addBtn = document.querySelector('#add-btn');
let input = document.querySelector('#user-name');
let usersDiv = document.querySelector('.users-container');

let deleteUser = async (userId) => {
    try {
        await deleteDoc(doc(db, "users", userId));
        console.log('user deleted!')
    } catch (error) {
        console.error(error)
    }
}

let renderUsers = () => {
    users.map((user) => {

        let userCard = document.createElement('div');
        userCard.id = user.uid
        userCard.className = 'user-card'
        userCard.innerHTML = `
        <h2>${user.username}</h2>
        <button class='userDelete-btn'
        >delete</button>
       `;
        userCard.querySelector('.userDelete-btn')
            .addEventListener('click', () => deleteUser(user.uid))

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



// fetch users data
let fetchUsers = async () => { /// Read data
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            users.push({
                uid: doc.id,
                ...doc.data(),
            });
        });

    } catch (error) {
        console.error(error);
    }

}


fetchUsers().then(() => {

    console.log( 'users => ',users)
    renderUsers()
})



/// method : POST  --> body {}
/// method : GET