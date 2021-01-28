function youreWinnerBaby() {

// image 1

var randNumber1 = Math.floor(Math.random()*6 + 1);
var image1 = document.querySelector(".img1");
var randomImage = ("images/dice" + randNumber1 + ".png");
image1.setAttribute("src", randomImage);

// image 2

var randNumber2 = Math.floor(Math.random()*6 + 1);
var image2 = document.querySelector(".img2");
var randomImage = ("images/dice" + randNumber2 + ".png");
image2.setAttribute("src", randomImage);

if (randNumber1 > randNumber2) {
    document.querySelector("h1").textContent = "Ondrej, you're the winner, baby! Luis, sashay away...";
} else if (randNumber1 < randNumber2) {
    document.querySelector("h1").textContent = "Luis, you're the winner, baby! Ondrej, sashay away...";
} else {
    document.querySelector("h1").textContent = "You're both winners! Shantay, you both stay!";
}

}

youreWinnerBaby();
