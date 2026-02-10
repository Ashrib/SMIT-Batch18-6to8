
function Student(std_name, age,marks){
    this.std_name = std_name;
    this.age = age;
    this.marks = marks;
}

var std1 = new Student('ali',30,[67,89,44,78]);
var std2 = new Student('adil',20,[67,89,44,78]);

console.log(std1);
console.log(std2);
