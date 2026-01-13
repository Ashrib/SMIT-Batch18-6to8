// function greetUser(username){  // parameters

//     console.log("Welcome! " + username);
// }

// greetUser("Ali"); // argument
// greetUser("Usman"); // argument

// function add(num1, num2){
//     var result = num1 + num2;
//     return result;
// }

// console.log(add(45,60));
// console.log(add(55,3));


// function readData(arrayData){
//     console.log(arrayData);

//     for(var i=0; i<arrayData.length; i++){
//         console.log(arrayData[i]);
//     }
// }

// readData([1,5,7,3,8,2])
// readData(['ali','adil','usman','adeel'])


// var a = 35;
// var b = 77;

// console.log(add(a,b)) // 35,77




function calculator(){

    var userInput = document.getElementById('input-screen').innerText;
    
    console.log(eval(userInput))
}


var screenDiv = document.getElementById('input-screen')

function editScreen(data){
    if(data == 'C'){
        screenDiv.innerText = ''
        return
    }

    if(data == 'del'){
        var textLength = screenDiv.innerText.length;
        screenDiv.innerText = screenDiv.innerText.slice(0, textLength -1);
        return
    }
    screenDiv.innerText += data
}