

var numbers = [10, 20, 30, 40]; // array of numbers 
console.log(numbers);

var array1 = [true, 20, "abc", "hello", null,false];

//index:   // 0      // 1     // 2
var cities = ["karachi", "lahore", "hyderabad"]; // array of strings
console.log(cities);



// []
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);


var array2 = ["a", "b", "c", "d"];

// array length 5, last index ?

// console.log( array2.length   )


var findLength = array1.length;
console.log(findLength)

console.log(array1[findLength - 1]);

var studentsName = ["ali", "hamza","huzaifa"];
console.log(studentsName[2]);

studentsName[1] = "usman";
studentsName[2] = "usman";
studentsName[3] = "new name";

console.log(studentsName);



var newArray = [2,56,23,6,67,687,324,32984];
console.log(newArray)

//  want to delete/remove the last element/item of an array
newArray.pop();
newArray.pop();
console.log(newArray)
console.log("before push ")

//  want to add/insert the  element/item from end of an array
newArray.push(500,1000,40,50,"abc");
console.log(newArray);




