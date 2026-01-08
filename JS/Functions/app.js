// function greetUser() {
// var username = prompt("enter your name");
// console.log("welcome "+ username+ " to visit this page");
// }
// greetUser(); //invoke the function by its name


function generateOtp() {
    var otp = Math.floor((Math.random() * 8999) + 1000);
    console.log("generated otp: " + otp)
}
generateOtp()


var students = ['ali', 'usman', 'noman', 'adil', 'hadi'];

function listStudents() {
    for (var i = 0; i < students.length; i++) {
        console.log(students[i])
    }
}
listStudents();

console.log('-----------new students-------------')
students.push('sami','zaid','umer');
console.log('-----------after new students entry-------------')

listStudents();
generateOtp();

function sum(){
    var num1= 20;
    var num2= 40;
    var result = num1 + num2;
    console.log("result: " + result)
    
    return result;
}

var a = sum();
