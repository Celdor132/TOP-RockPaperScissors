console.log("Hello there, welcome to the game!");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"]; //choices for the computer
function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()* 3)]
    return(computerChoice);
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return("TIE! Your weapons collapsed the universe.");
        //player chooses rock
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return("You crushed their scissors with your rock!");
            playerScore +=1;
        }
        if (computerSelection === "paper") {
            return("Your rock was smothered by their paper...");
            computerScore +=1;
        }
        //player chooses paper
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return("Your paper smothered their rock!!!!");
            playerScore +=1;
        }
        if (computerSelection === "scissors") {
            return("Your paper was shredded by their scissors...");
            computerScore +=1;
        }
        //player chooses scissors
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return("Your scissors shredded their paper!!");
            playerScore +=1;
        }
        if (computerSelection === "rock") {
            return("Your scissors were crushed by their rock...");
            computerScore += 1;
        }
        //player chooses gun
    } else if (playerSelection === "gun") {
        return("Thats cheating but... you win...");
        playerScore +=1;
        //player doesn't choose from the options
    } else {
        return(`"${playerSelection}" is not an authorized weapon. Try again!`)
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    console.log(`You have won ${playerScore} times and you have lost ${computerScore} times.`)
    }
}
const playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
game();