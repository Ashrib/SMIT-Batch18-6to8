
/// destructuring
let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
let username = 'xyz'

let [a, b, , c] = arr;

console.log(a)
console.log(b)
console.log(c)

let obj = {
    name: 'abc',
    age: 30,
    city: 'karachi',
    username: 'abc123'
}

let { age, city, username: user_name } = obj;
console.log(age);



let nums = [34, 6, 34, 8, 37, 8, 99, 23, 56];

/// rest
let [num1, num2, ...otherNums] = nums;

console.log(num1)
console.log(otherNums)


let std1 = {
    rollNumber: ['35343654', '7869798'],
    age: 20,
    campus: "Malir",
}

let { rollNumber, ...otherInfo } = std1;
console.log(otherInfo);


console.log(rollNumber);
console.log(otherInfo.age);
console.log(std1);


//spread opt

let newArray = ['abc', 'xyz', ...arr] ///

let obj2 = {
    a: 45,
    b: 436
}


let objCopy = { newValue: true, ...obj2, num: 200 }


console.log(objCopy);




let users = [
    {
        name: 'user1', age: 20
    },
    {
        name: 'user2', age: 22
    },
    {
        name: 'user3', age: 23
    }
];


let newUsers = [...users, {name:'user4', age:20}]
console.log(newUsers)



















