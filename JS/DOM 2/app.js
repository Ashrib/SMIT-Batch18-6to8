var mainDiv = document.getElementsByClassName('main')[0];

function sum(num){
    console.log('sum function', num);
}

/// click event
mainDiv.addEventListener('click',  function (){
    sum(60);
});

// higher order function

console.log(mainDiv);
var childElm = mainDiv.childNodes[1];

console.log(childElm.childNodes)


document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('class')
document.getElementsByName('name')




