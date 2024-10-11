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

    let choice = console.log(prompt('Choose your weapon: Rock, Paper, Scissors!'));
    
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

    while (humanChoice === 'invalid') {
        return;
    }
    if (humanChoice === computerChoice) {
            console.log('You both chose ' + humanChoice);

    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')) { 
                console.log(
                'You win this round! ' +
                humanChoice +
                ' beats ' +
                computerChoice);
                humanScore++;
    } else {
        console.log(
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
    console.log('You: ' + humanScore + ' Computer: ' + computerScore);
}

/* while (humanScore < 5 && computerScore < 5) {
    playGame();
}

if (humanScore === 5) {
    console.log('You win the game! Are you some kind of seer?');
} else if (computerScore === 5) {
    console.log('You lose the game! With practice the student becomes the master');
} */