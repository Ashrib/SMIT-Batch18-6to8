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





let numbers = [10,40,50,60,80];

let total = numbers.reduce(
    (acc, current)=> acc + current

    ,0);

    console.log("total => ", total)
    
    
    let cartItems = [
        {name: 'laptop', price: 400},
        {name: 'car', price: 1000},
        {name: 'phone', price: 5000},
    ]
    
    
    let totalAmount = cartItems.reduce(
        (sum, current) => sum + current.price
        ,0
    )
    console.log("total amount => ", totalAmount);




    let complexArray = [20,50,66, [70,80,88], [[40,44,[56,47]], 60,77]];
//    console.log( complexArray.flat(2));
   console.log(complexArray.flat(Infinity));



   ///palindrome words
/// mom
/// madam
/// pop
    let checkPalindrome = (word) => word.split("").reverse().join("") == word;


    console.log(checkPalindrome('mom'));
    console.log(checkPalindrome('abc'));



