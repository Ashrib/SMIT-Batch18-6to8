
function Student(name,age,marks,totalMarks){
    this.name =name,
    this.age = age,
    this.marks = marks,
    this.totalMarks = totalMarks,
    this.calPer = ()=>{
        let result = 0; 
        this.marks.forEach((num)=>{
            console.log(num)
            result += num
        })
        console.log(result/this.totalMarks * 100)
    } 
}


let std = new Student('abc',20,[60,80,90,99,78], 500) /// {  }
let std = new Student('abc',20,[60,80,90,99,78], 500) /// {  }
std.calPer()




let greet = (a)=>{
    console.log(`from 1st fun: ${a}`)
    
    return ()=>{
        console.log(`from 2nd fun---`)
    }
}

let higherOrder = greet(100);
higherOrder();





let sum = (a, b=0 , ...other)=>{ /// default parameters
    console.log(a + b)
}

sum(45)
sum(45,10)