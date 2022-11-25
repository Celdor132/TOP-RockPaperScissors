console.log("Hello there, welcome to the game!");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"]; //choices for the computer
function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()* 3)]
    console.log(computerChoice);
    return(computerChoice);
}
function declareWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
        //player chooses rock
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "win";
        }
        if (computerSelection === "paper") {
            return "lose";
        }
        //player chooses paper
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "win";
        }
        if (computerSelection === "scissors") 
            return "lose";
        //player chooses scissors
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "win";
        }
        if (computerSelection === "rock") {
            return "lose";
        }
        //player chooses gun
    } else if (playerSelection === "gun") {
        return "cheat";
        //player doesn't choose from the options
    } else {
        return(`"${playerSelection}" is not an authorized weapon. Try again!`)
    }
}
function updateScore() {
    if (declareWinner() == "tie") {
        return("No winners in this battle.");
    } else if (declareWinner() = "win") {
        return("You crushed your enemy.");
    } else {
        return("You are dead.");
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
    declareWinner(playerSelection, computerSelection);
    console.log(`You have won ${playerScore} times and you have lost ${computerScore} times.`)
    }
}
const playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
const computerSelection = getComputerChoice();

console.log(updateScore());
//game();