var dice1 = 1 + Math.floor(Math.random() *6);
var dice2 = 1 + Math.floor(Math.random() *6);

document.querySelector("#dice1").src="images/dice" + dice1 +".png";
document.querySelector("#dice2").src="images/dice" + dice2 +".png";

if (dice1 > dice2) {
    document.querySelector("h1").innerHTML="👍Player 1 wins!";
}
else if (dice2 > dice1) {
    document.querySelector("h1").innerHTML="Player 2 wins!👍";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}

