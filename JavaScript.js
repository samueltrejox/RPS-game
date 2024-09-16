let humanScore = 0;
let computerScore = 0;
let round = 5;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0: 
            return 'Rock';
        case 1: 
            return 'Paper';
        case 2: 
            return 'Scissors';
    }
}

function getHumanChoice() {

    let choice = prompt('Choose your weapon: Rock, Paper, Scissors!');

    if (choice.toLowerCase() === 'rock') {
        return 'Rock';
    } else if (choice.toLowerCase() === 'paper') {
        return 'Paper';
    } else if (choice.toLowerCase() === 'scissors') {
        return 'Scissors';
    } else {
        return 'invalid';
    }
}

function playRound(getHumanChoice, getComputerChoice){

    let human = getHumanChoice.toLowerCase();
    let computer = getComputerChoice.toLowerCase();

    if (human === 'invalid') {
        alert('That\'s not a valid choice!'); return;
    }

    if (human === computer) {
        alert('You both chose ' + getHumanChoice);
    } else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')
    ) {
        alert('You win this round! ' + getHumanChoice + ' beats ' + getComputerChoice);
        humanScore++;
    } else {
        alert('You lose this round! ' + getComputerChoice + ' beats ' + getHumanChoice + ', try again!');
        computerScore++;
    }
}

function playGame() {
playRound(getHumanChoice(), getComputerChoice());
alert('You: ' + humanScore + ' Computer: ' + computerScore);
}

while (humanScore !== 5 && computerScore !== 5) {
        playGame();
    }

if (humanScore === 5) {
    alert('You win the game! Are you some kind of seer?');
} else if (humanScore === computerScore) {
    alert('It\'s a tie... That\'s unacceptable, please play again!');
} else {
    alert('You lose the game! With practice the student becomes the master');
}