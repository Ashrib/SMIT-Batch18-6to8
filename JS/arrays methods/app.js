var array1 = ['a','b','c'];
console.log(array1)


array1.pop(); // remove from end
console.log(array1)


array1.push("e",10) // add from end
console.log(array1)

array1.shift() // remove from start
console.log(array1)

array1.unshift(true,300) // add one or more elements from start
console.log(array1)


// adding without deletion
array1.splice(1,0,"abc");
console.log(array1);

// adding with deletion
array1.splice(3,2,'x','y');
console.log(array1);

// no adding but deletion
array1.splice(2,4);
console.log(array1);

var mixArray = [23,56,'s','y',true,300];

console.log(mixArray)

var copyOfArray = mixArray.slice(2,5);  // 2nd number -1
console.log(copyOfArray)

var lengthOfArray = mixArray.length - 1;  // last index of array

                                // -1
console.log( mixArray.slice(0, lengthOfArray) );

console.log( mixArray.slice(lengthOfArray-2) );

console.log( mixArray.slice(-4,-2 ) );



