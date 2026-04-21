
let arr1 = [1,2];
let arr2 = [3,4, NaN];

console.log(arr1.concat(arr2,5,7,8));
console.log(arr1);

console.log(arr2.includes(4));

let users = [
    {name:'user1',age: 20, email:'user1@abc.com'},
    {name:'user2',age: 21, email:'user2@abc.com'},
    {name:'user2',age: 22, email:'user2@abc.com'},
    {name:'user3',age: 23, email:'user3@abc.com'},
    {name:'user4',age: 24, email:'user4@abc.com'},
];

let findUser = users.find((user) => user.name == 'user2' );
console.log(findUser);


let filterUsers = users.filter((user,i) => user.name == 'user2' || user.age > 22);
console.log(filterUsers);

arr1.forEach((item,i,arr)=> {

});
console.log(arr1);

console.log(arr1.map((item,i,arr) => item*2));
console.log(arr1.forEach((item,i,arr)=> item*2));


let nums = [34,57,98,3,4];

let letters = ['a','f','e','b','c'];
letters.sort();

nums.sort((a,b) => a - b);
nums.sort((a,b) => b - a);

console.log(nums)






