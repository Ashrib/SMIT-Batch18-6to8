var age = 20;
var gender = "male";
var city = "karachi";

if (city == "karachi") {
    if (gender == "male") {
        if (age >= 10 && age <= 15) {
            console.log("techno kids");
        }
        else if (age >= 16 && age <= 25) {
            console.log("web and app");
        }
        else if (age >= 26 && age <= 50) {
            console.log("shopify");
        }
        else {
            console.log("no courses for this age!");
        }
    }
    else {
        if (age >= 15 && age <= 25) {
            console.log("graphic designing");
        }
        else if (age >= 26 && age <= 30) {
            console.log("digital marketing");
        }
        else if (age >= 31 && age <= 40) {
            console.log("UI/UX");
        }
        else {
            console.log("no courses for this age!");
        }
    }
}
else {
    console.log("only for karachi");
}


var lateMinutes = 20;
var paid = true;
var idCard = true;

if (idCard == true) {
    if (paid == false && lateMinutes >= 6) {
        console.log("please be on time and pay the fee!")
    }
    else if(paid == false){
        console.log("please pay the fee!")
    }
    else if(lateMinutes>5){
        console.log("please be on time!")
    }
    else{
        console.log("you are in.")
    }
} else {
    console.log("not allow")
}



