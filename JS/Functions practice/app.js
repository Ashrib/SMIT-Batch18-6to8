

/// convert data types
function convertDataTypes(data) {
    // console.log(typeof (data))
    //string to number
    if (typeof (data) == 'string') {
        return Number(data);
    }

    if (typeof (data) == 'number') {
        return data.toString();
    }

}
var res = convertDataTypes('abc');
var res2 = convertDataTypes(30);

// console.log(res)
// console.log(res2)

var showResultElm = document.getElementById("showResult");

var historyData = [];
var initialAmount = 5000;
var amountInpElm = document.getElementById('amount-inp');

function checkAmount() {
    showResultElm.innerText = "current amount: " + initialAmount;
}


// here is the logic to deposit the amount
function depositAmount() {
    var amountInpValue = Number(amountInpElm.value);
    // validate
    if (amountInpValue < 500) {
        alert("please deposit atleast 500");
        return
    }

    initialAmount += amountInpValue;
    showResultElm.innerText = 'successfully deposited!';
    var toMaintainHistory = 'deposited: ' + amountInpValue;
    historyData.push(toMaintainHistory);
}

function withdrawAmount() {
    var amountInpValue = Number(amountInpElm.value);
    if (amountInpValue < 500) {
        alert("please withdraw atleast 500");
        return
    }

    if (initialAmount < amountInpValue) {
        alert("insufficient balance!");
        return;
    }

    initialAmount -= amountInpValue
    showResultElm.innerText = 'successfully on withdraw!'
    var toMaintainHistory = 'withdraw: ' + amountInpValue;
    historyData.push(toMaintainHistory)
}

function viewHistory() {
    showResultElm.innerText = ''
    if (historyData.length == 0) {
        showResultElm.innerText = 'no history';
        return
    }

    for (var i = 0; i < historyData.length; i++) {
        showResultElm.innerHTML += historyData[i] + '<br>';
    }
}
