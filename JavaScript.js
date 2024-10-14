let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll(".btns");
const results = document.querySelector("#results");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerSelection = btn.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
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
    playerScore++;
    results.innerText =
      playerSelection + " beats " + computerSelection + ", you win this round!";
  } else {
    computerScore++;
    results.innerText =
      computerSelection +
      " beats " +
      playerSelection +
      ", better luck next time D:";
  }
  results.innerText += `\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`;
}

/* while (humanScore != 5 && computerScore != 5) {
    playGame();
}

if (humanScore === 5) {
    console.log('You win the game! Are you some kind of seer?');
} else if (computerScore === 5) {
    console.log('You lose the game! With practice the student becomes the master');
} */
