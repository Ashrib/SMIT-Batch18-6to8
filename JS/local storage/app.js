// // local storage

var userName = 'user123';
window.localStorage.setItem("user1", userName); /// set data

var data = window.localStorage.getItem("user1"); /// get data
console.log("data => ", data);

var users = [{name:'abc'},{name: 'xyz'}];

var stringData = JSON.stringify(users);  /// convert array into string
console.log(stringData);

window.localStorage.setItem('usersData', stringData);

