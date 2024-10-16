let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll(".btns");
const section2 = document.querySelector("#section-2");
const results = document.querySelector("#results");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
      const playerSelection = btn.id;
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
    }
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.innerText = "You both chose " + playerSelection + ", it's a tie...";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    results.innerText =
      playerSelection + " beats " + computerSelection + ", you win this round!";
    playerScore++;
  } else {
    computerScore++;
    results.innerText =
      computerSelection +
      " beats " +
      playerSelection +
      ", better luck next time D:";
  }

  updateScore();

  if (playerScore === 5 || computerScore === 5) {
    gameOver();
  }
}

function gameOver() {
  results.innerText = "";
  const winnerMessage = document.createElement("div");
  winnerMessage.classList.add("small-br");

  if (playerScore === 5) {
    winnerMessage.innerText =
      "Congratulations, you win! You deceived the computer";
  } else if (computerScore === 5) {
    winnerMessage.innerText =
      "You lose! With practice the student becomes the master";
  }

  section2.appendChild(winnerMessage);
  restartBtn();
}

function restartBtn() {
  const restartBtn = document.createElement("button");
  restartBtn.classList.add("restart");
  restartBtn.innerText = "Restart";

  restartBtn.addEventListener("click", () => {
    restartGame();
  });
  section2.appendChild(restartBtn);
}

function updateScore() {
  const score = document.querySelector("#score");
  score.innerText = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();

  const existingWinner = section2.querySelector(".small-br");
  if (existingWinner) {
    existingWinner.remove();
  }

  const existingRestartBtn = section2.querySelector(".restart");
  if (existingRestartBtn) {
    existingRestartBtn.remove();
  }
}
