

// for(var i = 1;  i <= 10;  i++ ){ // iteration
//     console.log(i * 3); // 5
// }
var isPresent = false;
var stdNames = ['ali','usman','umar', 'adil','noman', 'ali']; //4 , 3

for(var i = 0; i < stdNames.length; i++){
    // console.log(stdNames[i] + " at index: "+ i);
    if(stdNames[i] == 'talha'){
        isPresent = true;
        break;
    }
}

// if(isPresent == true){
//     console.log("yes talha is present");
// }else{
//     console.log(" talha is not present");
// }



var numbersData = [];

    // for(var i=1; i<=5; i++){
    //     var userNum = prompt("enter numer "+ i);
    //     numbersData.push(userNum);

    // }


    // console.log(numbersData)





// var num = '3';

// if(num % 2 == 0){
// console.log("even")
// }



var cities = ['karachi', 'lahore','hyderabad'];


var userInput = prompt("enter a city to search");
var isCheck = false;

for(var i=0; i<cities.length; i++){
    if(userInput == cities[i]){
        isCheck = true;
        break;
    }
}

if(isCheck == true){
    console.log("city found")
}
else{
    console.log("city not found")
}


var count = 0;
var nameToCheck = 'ali';
for(var i=0; i< stdNames.length; i++){
    if(stdNames[i] == nameToCheck){
        count++;
    }
}

console.log("name count: "+ count)

