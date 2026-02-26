var bodyElm = document.getElementsByTagName('body')[0];
console.log(bodyElm.childNodes[1])


var count = 0;
var textCount = 0;
for (var i = 0; i < bodyElm.childNodes.length; i++) {

    if (bodyElm.childNodes[i].nodeType === 1) {
        count++;
    }
    else {
        textCount++;
    }
}

console.log(count)
console.log(textCount)

var pCount = 0;
for (var i = 0; i < bodyElm.childNodes.length; i++) {
    if (bodyElm.childNodes[i].nodeName.toLowerCase() == 'p') {
        pCount++;
    }
}
console.log('p element: ' + pCount)


// var a = document.childNodes[1].childNodes[2].childNodes;
// console.log(a);

