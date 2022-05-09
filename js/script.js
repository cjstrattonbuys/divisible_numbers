var response = document.querySelector(".response");
var showGuess = document.querySelector(".show-guess");
var num = Number(prompt("Give a number between 1-25. :)"));

function guessNumber(name, num) {
  //var randomNumber = Math.floor(Math.random() * 26); // This will produce a number between 1 and 100 - this line is error free :)

  if (num > 25) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  } else if (num < 1) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  }

  // We've got a number between 1 and 25, let's do this.
  showGuess.innerText = num;

  for (let i = 0; i < num; i++) {
    const divisible = [];
    console.log(divisible);
    if (Number.isInteger(num / i)) {
      divisible.push(i);
      console.log(divisible);
    }
  }
}

guessNumber("Ann", num);
