// function greetUser() {
// var username = prompt("enter your name");
// console.log("welcome "+ username+ " to visit this page");
// }
// greetUser(); //invoke the function by its name


// function generateOtp() {
//     var otp = Math.floor((Math.random() * 8999) + 1000);
//     console.log("generated otp: " + otp)
// }
// generateOtp()


// var students = ['ali', 'usman', 'noman', 'adil', 'hadi'];

// function listStudents() {
//     for (var i = 0; i < students.length; i++) {
//         console.log(students[i])
//     }
// }
// listStudents();

// console.log('-----------new students-------------')
// students.push('sami','zaid','umer');
// console.log('-----------after new students entry-------------')

// listStudents();
// generateOtp();

// function sum(){
//     var num1= 20;
//     var num2= 40;
//     var result = num1 + num2;
//     console.log("result: " + result)

//     return result;
// }

// var a = sum();



// var isLogin = false;

// function checkLogin(){

//     if(isLogin == true){
//         return 'user is active'
//     }
//     else{
//         return 'user is logged out.'
//     }

// }

// var userStatus = checkLogin();
// console.log(userStatus);

function calPercentage() {
    var inputValue = Number(document.getElementById('inp-per').value);
    var textElm = document.getElementById('per-text');

    if (inputValue < 1) {
        alert("number should be greater than 0!");
        return;
    }   
    if (inputValue > 500 ) {
        alert("number should be less than 500 or equal!");
        return;
    }

    var percentage = (inputValue / 500) * 100;
    textElm.innerText = "calculated percentage: " + percentage.toFixed(2) + "%";
}


