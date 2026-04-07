var users = [];

async function getUsers() {
    try {
        var respsone = await fetch('https://jsonplaceholder.typicode.com/users');
        respsone = await respsone.json();
        if(Array.isArray(respsone)){
            users = respsone;
        }
    } catch (error) {
        console.log(error);
    }
}

getUsers().then(function(){
    console.log(users);
    // readUsersData()
})


console.log(true);
// function readUsersData(){
// }








