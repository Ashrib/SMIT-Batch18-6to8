function inputFocus(e){
    // console.log(e.target);
    var targetElement = e.target;  //// getting input element by using 'event'
    targetElement.style.padding = '15px';
};

function inputBlur(e){
    // console.log(e.target);
    var targetElement = e.target;  //// getting input element by using 'event'
    targetElement.style.padding = '0px';

    var emailError =  document.getElementById('email-error');
    if(targetElement.value.indexOf('@') == -1 ){
        emailError.style.display = 'inline-block';
        return;
    }
    if(targetElement.value.indexOf('.') == -1 ){
        emailError.style.display = 'inline-block';
        return;
    }
     if(targetElement.value.indexOf(' ') !== -1 ){
        emailError.style.display = 'inline-block';
        return;
    }
    if(targetElement.value[targetElement.value.indexOf('.')+2] == undefined){
         emailError.style.display = 'inline-block';
        return;
    }
    emailError.style.display = 'none';
};

var images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbxGgmUGIvztvt2ySh0kFon3jc7OVe-QZ5Q&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OZFoooeonih8ocEaM_0fU9jJ8lWvz-M0tg&s']

function onBoxOver(e){
    e.target.style.backgroundImage = `url('${images[0]}')`
}

function onBoxOut(e){
    e.target.style.backgroundImage = `url('${images[1]}')`
}


function loginSubmit(e){
    /// to prevent the refresh
    e.preventDefault();
    console.log(e.target) /// a complete form element
    var emailInpValue = e.target[0].value;
    var passInpValue = e.target[1].value;
    var radioInputs = document.getElementsByName('nic'); /// get all radio inputs

    // var noChecked = false;
    //     for (let i = 0; i < radioInputs.length; i++) {
    //       if(radioInputs[i].checked==true){
    //           noChecked = true;
    //       }
    //     }
    if(radioInputs[0].checked === false && radioInputs[1].checked === false){
        alert('please checked any of radio options!');
        return
    }
    if(passInpValue.length < 8){
        alert('min 8 chars reqiured!');
        return;
    }

    /// form submit
}