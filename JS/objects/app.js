// var students = [ // array of objects
//     {
//         id: 435456,
//         name: 'ali',
//         age: 21,
//         address: {
//             city: 'karachi',
//             area: 'xyz',
//         },
//         contacts: ['030000000', '0i08797987'],
//         isAdmin: false,
//     },
//     {
//         name: 'ali',
//         age: 21,
//         address: {
//             city: 'karachi',
//             area: 'xyz',
//         },
//         contacts: ['030000000', '0i08797987'],
//         isAdmin: false,
//     },
//     {
//         name: 'ali',
//         age: 21,
//         address: {
//             city: 'karachi',
//             area: 'xyz',
//         },
//         contacts: ['030000000', '0i08797987'],
//         isAdmin: false,
//     }
// ]


var student2 = {
    name: 'ali',
    age: 21,
    address: {
        city: 'karachi',
        area: 'xyz',
    },
    contacts: ['030000000', '0i08797987'],
    isAdmin: false,
};

// console.log(student1.age);
console.log(student2.name);  

student2.name = 'abc';

student2.a = null;

// console.log(student2)

delete student2.age

console.log(student2)

var isExist = "address" in student2;
console.log(isExist)