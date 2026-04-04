

// function showAlert() {
//     try {
//         var name = 'abc';
//         alert(name);

//         promp(name);
//     }
//     catch(error){
//         console.log(error)
//     }
// }


// showAlert()

async function getUsers(){
    try{
        var users = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(users);
    }
    catch(error){
        console.log('error while fetching users!')
        console.log(error)
    }
}

getUsers()

console.log(true)


// API  -> Application Programming Interface








