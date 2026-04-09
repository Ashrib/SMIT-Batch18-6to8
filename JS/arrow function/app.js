
let a = 10;   /// let vs var  ('let' has block scope)


// arrow functions

let add = (a,b) =>  a + b;
console.log(add(5,10));

let showAlert = () => alert('hi');

// let fetchData = async () => {

// }

// setTimeout(()=>{

// })

let double = n => n*2 ;

// (false)  ? alert('yes') : alert('no');

let age = 20;
let isAllowed = (age > 17) ? true : false;  /// ternary operater

console.log(isAllowed);


let show = (age<17) ?
()=>{
    let userInp = prompt('enter course name');
    console.log(userInp);
}
: /// else
()=>{
    console.log('not allowed');
}

show()




