console.log("Hello there, welcome to the game!");

rounds = 0;
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];  //choices for the computer
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()* 3)]
    console.log(`The computer chose ${computerChoice}`);
    return(computerChoice);
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    console.log(`The player chose ${playerChoice}`);
    return(playerChoice);
}

function declareWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return("tie");

        //player chooses rock
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return("win");
        }
        if (computerSelection === "paper") {
            return("lose");
        }

        //player chooses paper
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return("win");
        }
        if (computerSelection === "scissors") 
            return("lose");

        //player chooses scissors
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return("win");
        }
        if (computerSelection === "rock") {
            return("lose");
        }

        //player chooses gun
    } else if (playerSelection === "gun") {
        return("cheat");

        //player doesn't choose from the options
    } else {
        return("Unspecified error. Please figure it out.");
    }
}

function updateScore() {
    if (declareWinner(playerSelection, computerSelection) === ("win")) {
        playerScore++;
        rounds++;
        return("You win!");
    } else if (declareWinner(playerSelection, computerSelection) === ("lose")) {
        computerScore++;
        rounds++;
        return("You lose!");
    } else if (declareWinner(playerSelection, computerSelection) === ("cheat")) {
        playerScore++;
        rounds++;
        return("You cheated! But... you won.");
    } else if (declareWinner(playerSelection, computerSelection) === ("tie")) {
        console.log("No winners here");
    } else {
        return(`"${playerSelection}" is not an authorized weapon. Try again!`)
    }
}

function checkRounds(rounds) {
    if (rounds < 5) {

    }
}

function game() {
    declareWinner(playerSelection, computerSelection);
    console.log(updateScore());
    console.log(`Your score is ${playerScore} and the enemy's score is ${computerScore}. 
    You have ${5 - rounds} rounds remaining.`)
    
}

game();

