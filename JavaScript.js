let humanScore = 0;
let computerScore = 0;

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
        console.log('That\'s not a valid choice!'); return;
    }

    if (human === computer) {
        console.log('It\'s a tie! You both chose ' + getHumanChoice);
    } else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')
    ) {
        console.log('You win! ' + getHumanChoice + ' beats ' + getComputerChoice);
        ++humanScore;
    } else {
        console.log('You lose! ' + getComputerChoice + ' beats ' + getHumanChoice + ', try again!');
        ++computerScore;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);