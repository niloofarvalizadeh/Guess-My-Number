// * Generate a random number

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// * Receiving user's number

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // * When there is no input

  if (!guess) {
    displayMessage("❌ No number!");

    // * When player wins
  } else if (guess === randomNumber) {
    displayMessage("✅ Correct Number!");
    document.querySelector(".number").textContent = randomNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // * When guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        (document.querySelector(".message").textContent =
          guess > randomNumber ? "😯 Too high!" : "👻 Too low!")
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("☹ You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
// * Agian button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  let randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
