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

    if (choice.toUpperCase() === 'ROCK') {
        return 'You chose Rock!';
    } else if (choice.toUpperCase() === 'PAPER') {
        return 'You chose Paper!';
    } else if (choice.toUpperCase() === 'SCISSORS') {
        return 'You chose Scissors!';
    } else {
        return 'That\'s not a valid choice!';
    }
}