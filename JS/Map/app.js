

let mapObj = new Map();

mapObj.set(()=>{}, 'function key'); /// key data-type --> function
mapObj.set([1,2], 'hello'); /// key data-type --> array
mapObj.set(NaN, 400); /// key data-type --> NaN
mapObj.set('1', 100); /// key data-type --> string
mapObj.set(1, 'num1');/// key data-type --> numeric
mapObj.set(true, 'bool1'); /// key data-type --> boolean

console.log(mapObj);

console.log(mapObj.get(true));
console.log(mapObj.get(1));

console.log(mapObj.has(200));
console.log(mapObj.has(1));

mapObj.delete('1');  /// delete specific key-value pair
console.log(mapObj);
// mapObj.clear();
// console.log("after clear => ", mapObj);

let user1 = {name:'user1'};

mapObj.set(user1, {num1:600});  /// key and value both are objects
console.log(mapObj);
console.log(mapObj.get(user1)); /// key as an object

console.log(mapObj.keys())
console.log(mapObj.values())
console.log(mapObj.entries())


for(let keyName of mapObj.keys()){
    console.log(keyName)
}

