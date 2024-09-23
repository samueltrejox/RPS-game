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
    
    while (choice === null) {
        return 'invalid';
    }

    choice = choice.trim().toLowerCase();
    if (choice === 'rock') {
        return 'Rock';
    } else if (choice === 'paper') {
        return 'Paper';
    } else if (choice === 'scissors') {
        return 'Scissors';
    } else {
        return 'invalid';
    }
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === 'invalid') {
        alert('That\'s not a valid choice!');
        return;

    } else if (humanChoice === computerChoice) {
            alert('You both chose ' + humanChoice);

    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')) { 
                alert(
                'You win this round! ' +
                humanChoice +
                ' beats ' +
                computerChoice);
                humanScore++;
    } else {
        alert(
            'You lose this round! ' +
            computerChoice +
            ' beats ' +
            humanChoice +
            ', try again!');
        computerScore++;
    }
}

function playGame() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    alert('You: ' + humanScore + ' Computer: ' + computerScore);
}

while (humanScore < 5 && computerScore < 5) {
    playGame();
}

if (humanScore === 5) {
    alert('You win the game! Are you some kind of seer?');
} else if (computerScore === 5) {
    alert('You lose the game! With practice the student becomes the master');
}