var currentLocation = window.location.href;
console.log(currentLocation);


console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.hash);



// window.location.href = 'https://www.google.com';
// OR 



function navigateHome(){
        window.location.assign('http://127.0.0.1:5500/JS/browser%20URL%20control/home.html')
        // window.location.replace('http://127.0.0.1:5500/JS/browser%20URL%20control/home.html')

    }
