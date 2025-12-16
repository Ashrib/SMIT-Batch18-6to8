

// for(var i = 1;  i <= 10;  i++ ){ // iteration
//     console.log(i * 3); // 5
// }
var isPresent = false;
var stdNames = ['ali','usman','umar', 'adil','noman']; //4 , 3

for(var i = 0; i < stdNames.length; i++){
    // console.log(stdNames[i] + " at index: "+ i);
    if(stdNames[i] == 'talha'){
        isPresent = true;
        break;
    }
}

if(isPresent == true){
    console.log("yes talha is present");
}else{
    console.log(" talha is not present");
}



var numbersData = [];

    // for(var i=1; i<=5; i++){
    //     var userNum = prompt("enter numer "+ i);
    //     numbersData.push(userNum);

    // }


    // console.log(numbersData)





var num = '3';

if(num % 2 == 0){
console.log("even")
}


