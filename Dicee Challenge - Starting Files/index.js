
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // This creates a random number from 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // This picks the right image

var randomImageSource = "images/" + randomDiceImage; // This picks the right image from our source

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random number created

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // Pick the right image

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // updates page with the new image and text.


// This is what will be displayed when a gives result is found

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML = "It's a tie!";
}
