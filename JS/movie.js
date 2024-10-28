let movieName = "avatar";
let guess = prompt("Guess the movie name");

while (guess != movieName && guess != "quite") {
  guess = prompt("Guess wrong. Please try again");
}

if (guess == movieName) {
  console.log("Congratulations");
} else {
  console.log("You've quit the game");
}
