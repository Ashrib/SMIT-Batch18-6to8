var usernameInp = document.getElementById('username');
console.log(usernameInp.attributes)

usernameInp.setAttribute('class', 'lg-inp');

console.log(usernameInp.hasAttribute('src'))

usernameInp.className = 'jbnhjb';
usernameInp.id = 'jbnhjb';

var newPara = document.createElement('p');  ///element node
newPara.setAttribute('class', 'bold-para');

// newPara.innerText = 'jhjhjnh'

var paraText = document.createTextNode("hello world");  // text node
newPara.appendChild(paraText);


document.getElementsByTagName('body')[0].appendChild(newPara);