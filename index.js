


// Page refresh function
function refreshPage() {
    window.location.reload();
}


// Targetting the button
let button = document.getElementById("winner-btn");

// Adding event listener to the button
button.addEventListener("click", refreshPage);


// Prayer 1 random number
let player1Num = Math.random() * 6;
player1Num = Math.floor(player1Num + 1);

// Prayer 2 random number
let player2Num = Math.random() * 6;
player2Num = Math.floor(player2Num + 1);

document.getElementById("player1").innerHTML = player1Num + " Points";
document.getElementById("player2").innerHTML = player2Num + " Points";

// show dice images based on the random numbers

let possibilities = [1, 2, 3, 4, 5, 6];

if (possibilities.includes(player1Num)) {
    let photo = document.getElementById("img1");
    photo.src="./images/dice" + player1Num + ".png";
}

if (possibilities.includes(player2Num)) {
    let photo = document.getElementById("img2");
    photo.src="./images/dice" + player2Num + ".png";
}


let winner = document.getElementById("winner");

if (player1Num > player2Num) {
    winner.textContent = "PLAYER 1 WINS";
} else if (player2Num > player1Num) {
    winner.textContent = "PLAYER 2 WINS";
} else {
    winner.textContent = "IT'S A DRAW";
}
