const max = prompt("enter the maximum number");

let random = Math.floor(Math.random() * max + 1);

let guess = prompt("Guess the max number");

while (true) {
  if (guess == "quite") {
    console.log("User wants to quite the Game");
    break;
  }

  if (guess == random) {
    console.log(" Congratulation! Your guess is number is ", random);
    break;
  } else if (guess < random) {
    guess = prompt("yours guess number is small, try with big number");
  } else if (guess > random) {
    guess = prompt("yours guess number is big, try with smaller number");
  }
}
