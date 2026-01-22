

var dateObject = new Date();


var currentDay = dateObject.getDay(); // 2
var currentMonth = dateObject.getMonth();
var miliSec = dateObject.getMilliseconds();
var time = dateObject.getTime();
var hours = 23;  // 0-23


console.log("date object: " + dateObject)
console.log(currentDay)
console.log(miliSec)
console.log(time)


var days = ['Sun', 'Mon', 'Tue', 'Wed','Thur', 'Fri', 'Sat' ];

document.write(days[currentDay]);
console.log(hours);


//am
// 0 - 11 
// hours += 1;

if(hours == 0){
    console.log(12 + 'am')
}
else if(hours >=1 && hours <= 11 ){ 
    console.log((hours) +'am')
}
else if(hours == 12){
    console.log(12+'pm');
}
else{  
    hours -= 12;
    console.log(hours+'pm');
}




/// specific date
var futureDate = new Date("January 21, 2030, 15:30:59");
console.log(futureDate)

var currentMilliSec = dateObject.getTime()/// millisec from 1 Jan 1970 till now
var futureMilliSec = futureDate.getTime()/// millisec from 1 Jan 1970 till 2030

var diffInMilliSec = futureMilliSec - currentMilliSec;

console.log('differnce: '+ diffInMilliSec);

console.log(Math.floor(diffInMilliSec / (1000 * 60 * 60 * 24 * 30 * 12))) /// s -> min -> hr -> day -> month -> year





// digital clock logic
var minSpan = document.getElementById('min');
var secSpan = document.getElementById('sec');

function getCurrentTime(){
    var currentTime = new Date();

    if( currentTime.getMinutes() < 10){
        minSpan.innerText = '0'+currentTime.getMinutes();
    }
    else{
        minSpan.innerText = currentTime.getMinutes();
    }

    if(currentTime.getSeconds() < 10){

        secSpan.innerText = '0'+currentTime.getSeconds();
    }
    else{
        secSpan.innerText = currentTime.getSeconds();
    }


}


setInterval( getCurrentTime , 1000 ) 
