// function of dice 1
var ramdomNumber1 = Math.floor(Math.random() * 6) + 1;

var ramdomDiceImg = "dice" + ramdomNumber1 + ".png";

var ramdomImgSource = "images/" + ramdomDiceImg ;


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ramdomImgSource);




// function of dice 2

var ramdomNumber2 = Math.floor(Math.random() * 6) + 1;

var ramdomImgSource = "images/dice" + ramdomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ramdomImgSource);

//if player win!*********

if (ramdomNumber1 > ramdomNumber2){
    document.querySelector("h1").innerHTML = "Player1 win🏆";
}
else if(ramdomNumber1 < ramdomNumber2 ){
    document.querySelector("h1").innerHTML = "Player2 win🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}






