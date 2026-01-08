// var randomNum = (Math.random() * 6) + 1;
// randomNum = Math.floor(randomNum)

// console.log(randomNum);

var otp = Math.floor((Math.random() * 8999) + 1000); 
console.log(otp);

var colors = ['red','blue','green','orange','yellow','aqua'];
var randomIndex = Math.floor(Math.random() * colors.length)

document.getElementById('main').style.backgroundColor = colors[randomIndex];




