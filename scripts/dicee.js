const imageURLs = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

var dice1 = Math.floor(Math.random() *6);
var dice2 = Math.floor(Math.random() *6);

document.querySelector("#dice1").src=imageURLs[dice1];
document.querySelector("#dice2").src=imageURLs[dice2];

if (dice1 > dice2) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (dice2 > dice1) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML="No winner!";
}

