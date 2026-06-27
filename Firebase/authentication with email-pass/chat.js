import { addDoc, and, collection, db, getDocs, onSnapshot, or, query, serverTimestamp, where } from "./firebaseConfig.js"

let users = [];
let messages = [];
let userId = null;
let selectedUser = null;


let usersDiv = document.querySelector(".users");
let chatDiv = document.querySelector(".msg-section");
let msgSendBtn = document.querySelector("#msg-send-btn");
let msgInp = document.querySelector("#msg-text");


if (!selectedUser) {
    chatDiv.innerHTML = '<h3>no chat</h3>'
}




/// get uid from localstorage
let getUserfromLocalStorage = () => {
    userId = JSON.parse(window.localStorage.getItem("uid"));
    console.log("uid = >", userId)
}
getUserfromLocalStorage();

let getUsers = async () => {
    try {
        let userQuery = query(collection(db, 'users'), where("uid", "!=", userId))
        let queryShot = await getDocs(userQuery);
        queryShot.forEach(doc => {
            users = [...users, {
                id: doc.id, ...doc.data()
            }]

        });
        console.log("users array => ", users)

    } catch (error) {
        console.error(error)
    }
}

getUsers().then(() => {
    renderUsers()
})

let renderMessages = () => {
    if (messages.length < 1) {
        chatDiv.innerHTML = `
        <div >
            <span>no message yet.</span>
        </div>
        
        `
        return;
    }
    chatDiv.innerHTML = ''
    messages.map((msgData) => {
        chatDiv.innerHTML += `
        <div class='msg ${(msgData?.from == userId)? 'right' : 'left' }' >
            <span>${msgData?.text}</span>
        </div>
        `
    })
}


let getMessages = async () => {
    try {
        let msgQuery = query(
            collection(db, "messages"),
            or(
                and(where("from", "==", userId), where("to", "==", selectedUser)),
                and(where("from", "==", selectedUser), where("to", "==", userId)),
            )
            
        )

        const unsubscribe = onSnapshot(msgQuery, (querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {
                msgs.push(doc.data());
            });
            messages = msgs;
            console.log("Current msgs : ", msgs);
        });

    } catch (error) {
        console.error(error)
    }
}

let userChat = (id) => {
    console.log(id)
    selectedUser = id;
    if (selectedUser) {
        getMessages().then(() => {
            renderMessages()
        })
        // chatDiv.innerHTML = `<h3>${selectedUser}</h3>`
    }

}




let renderUsers = () => {
    usersDiv.innerHTML = ``;

    if (users.length < 1) { //// no users yet
        usersDiv.innerHTML = `<div class='post'> no users</div>`
        return
    }


    users.map((user) => {

        let userCard = document.createElement("div");
        userCard.className = 'user-card'
        userCard.innerHTML += `
        <div>
            <h5 >${user?.email}</h5>
        </div>
        `
        userCard.addEventListener('click', () => userChat(user?.uid))


        usersDiv.appendChild(userCard)
    })
}


let sendUserMsg = async () => {
    try {

        let docRef = await addDoc(collection(db, "messages"), {
            text: msgInp.value,
            to: selectedUser,
            from: userId,
            createdAt: serverTimestamp(),
        });
        console.log("msg sent with doc id =>", docRef.id)
        renderMessages()

    } catch (error) {
        console.error(error)
    }
}


msgSendBtn.addEventListener("click", () => {
    console.log(msgInp.value);

    if (msgInp.value.length < 1) {
        console.error(new Error("please type to send msg!"))
        return;
    }

    if (!userId || !selectedUser) {
        console.error(new Error("can't send a msg!"))
        return;
    }
    sendUserMsg()


})





