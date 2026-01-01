// var userInput = prompt("enter some text");


// for(var i=0; i<userInput.length; i++){
//     if(userInput.slice(i, i+2) == "  "){
//         console.log("no double space allow!")
//         break;
//     }
// }

var para = "the New Yorker magazine doesn't allow the phrase World War II. sometext World War II"

// for(var i=0; i<para.length; i++){
//     if(para.slice(i, i+12) == "World War II"){
//         // console.log("found at index: ",i);
//         para = para.slice(0, i) + "the Second World War" + para.slice(i+12)
//     }
// }
// console.log(para);

// var findIndex = para.indexOf('World War II');

// if(findIndex != -1 ){
//     para = para.slice(0, findIndex)  + "the Second World War" + para.slice(findIndex+12)
// }

// console.log(para);
// console.log(para.lastIndexOf("the"));

// mutable ---- immutable


/// global replace
para = para.replace(/World War II/g ,"the Second World War" );
console.log(para);

console.log(para.charAt(2));
