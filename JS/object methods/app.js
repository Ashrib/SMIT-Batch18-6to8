
var std1 = {
    name: 'usman',
    age: 20,
    contacts: ['234235345','4356346'],
    marks: [70,80,50,89,68],
    calPer: function (){
        var obt = 0;
        for(var i= 0; i< this.marks.length; i++){
            obt += this.marks[i];
        }
        
        return (obt / 500) * 100;
    },
}
var std2 = {
    name: 'ali',
    age: 20,
    contacts: ['234235345','4356346'],
    marks: [70,70,40,69,68],
    calPer: function (){
        var obt = 0;
        for(var i= 0; i< this.marks.length; i++){
            obt += this.marks[i];
        }
        
        return (obt / 500) * 100;
    },
}
// console.log(std1.marks)

console.log(Math.floor(std1.calPer()));




var students = [
    {
    name: 'usman',
    age: 20,
    contacts: ['234235345','4356346'],
    marks: [70,80,50,89,68],
    calPer: function (){
        var obt = 0;
        for(var i= 0; i< this.marks.length; i++){
            obt += this.marks[i];
        }
        
        return (obt / 500) * 100;
    },
},
{
    name: 'ali',
    age: 25,
    contacts: ['234235345','4356346'],
    marks: [90,89,50,88,55],
    calPer: function (){
        var obt = 0;
        for(var i= 0; i< this.marks.length; i++){
            obt += this.marks[i];
        }
        
        return (obt / 500) * 100;
    },
    address: {
        city:"abc",
        area:'abc',
        location: {
            lat: 798,
            lag:87098
        }
    }
}
]

console.log(students[1].calPer());


