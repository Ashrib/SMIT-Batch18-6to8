// // local storage

// var userName = 'user123';
// window.localStorage.setItem("user1", userName); /// set data

// var data = window.localStorage.getItem("user1"); /// get data
// console.log("data => ", data);

// var users = [{name:'abc'},{name: 'xyz'}];

// var stringData = JSON.stringify(users);  /// convert array into string
// console.log(stringData);

// window.localStorage.setItem('usersData', stringData);




/// get data from local storage
var localStorageData = window.localStorage.getItem('userName');
console.log(localStorageData)

if(localStorageData == null){
    var userInput = prompt('enter name');
    console.log(userInput);
    if(userInput.length > 0 ){
        window.localStorage.setItem('userName', userInput)
    }
}else{
    console.log('userName => ' + localStorageData)
}





