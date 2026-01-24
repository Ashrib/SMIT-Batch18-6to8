

var globalData = 50; //global


function sum(a, b){
    var res = a + b; // local variable
    return res;
}

sum(4,7);


var a = 10; // global scope

function myFun (){
    var a = 20; // local scope
    console.log(a)

}
myFun();

console.log(a);

///   4!  -> 4*3*2*1

//// 8! -> 8*7*6*5...*1

function factorial(num){  /// recursive function (calls itself)
    if(num == 0){
        return 1;
    }
    
    return  num * factorial(num - 1);
}
console.log(factorial(5));

function numPower(num, pow){
    return num ** pow;
}
console.log(numPower(4,5));

Math.pow(4,2); //

/// 4 ^ 3 -> 4 * 4 * 4




