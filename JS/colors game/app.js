
var mainDiv = document.getElementById("main")
var matchDiv = document.getElementById("matchBox")
var scoreSpan = document.getElementById("score")
var colors = ['red','blue','yellow','green','orange','aqua'];
var score = 0;

// inital assign to score span
scoreSpan.innerText = score;

/// to generate the random color
function randomColor(){
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

/// assign color to the match box div
matchDiv.style.backgroundColor = randomColor();

function boxClickHandler(event){
    var targetDiv = event.target;

    // console.log(targetDiv.style.backgroundColor);

    /// to check the color of match box and the targeted div (the clicked one)
    if(targetDiv.style.backgroundColor === matchDiv.style.backgroundColor){
        // console.log(true)
        score++;
        scoreSpan.innerText = score;

    }
}

    for(var i=1; i < 31; i++){
        var divElm = document.createElement("div");
        divElm.innerText = "div " + i;
        divElm.className = "box";
        divElm.style.backgroundColor = randomColor();

        // onclick event assign
        divElm.addEventListener("click", boxClickHandler )
    
        mainDiv.appendChild(divElm)  /// node ---> DOM
    }

/// creating divs and applying colors, then append to the main dev elemnet
