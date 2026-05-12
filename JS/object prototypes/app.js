

function Plan(name,price,amount){
    this.name = name;
    this.price = price;
    this.amount = amount;
}

Plan.prototype.calAnual = function(){
    console.log("price:", this.price);
}

Plan.prototype.cancelable = true;

let p1 = new Plan('plan1',200,5000);
let p2 = new Plan('plan1',500,666);
p1.calAnual()

console.log(p1)

p2.cancelable = false




