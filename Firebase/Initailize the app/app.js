import { doc, db, addDoc, collection, getDocs } from './firebaseConfig.js'

let users = [];
let addBtn = document.querySelector('#add-btn');
let input = document.querySelector('#user-name');



addBtn.addEventListener('click', async () => {
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
let fetchUsers = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            users.push({
                id: doc.id,
                ...doc.data()
            })
           
        });

    } catch (error) { 
        console.error(error);
    }
    
}

        
fetchUsers().then(()=>{

    console.log(users)
})


/// method : POST  --> body {}
/// method : GET