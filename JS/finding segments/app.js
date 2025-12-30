// var userInput = prompt("enter some text");


// for(var i=0; i<userInput.length; i++){
//     if(userInput.slice(i, i+2) == "  "){
//         console.log("no double space allow!")
//         break;
//     }
// }




var para = "The New Yorker magazine doesn't allow the phrase World War II. sometext World War II"


for(var i=0; i<para.length; i++){
    if(para.slice(i, i+12) == "World War II"){
        // console.log("found at index: ",i);
        para = para.slice(0, i) + "the Second World War" + para.slice(i+12)
    }
}
console.log(para);