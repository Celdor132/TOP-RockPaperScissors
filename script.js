console.log("Hello there, welcome to the game!");

let roundsComplete = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();



function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    console.log(`The player chose ${playerChoice}`);
    return(playerChoice);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];  //choices for the computer
    let computerChoice = choices[Math.floor(Math.random()* 3)]
    console.log(`The computer chose ${computerChoice}`);
    return(computerChoice);
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
        roundsComplete++;
        return("You win!");
    } else if (declareWinner(playerSelection, computerSelection) === ("lose")) {
        computerScore++;
        roundsComplete++;
        return("You lose!");
    } else if (declareWinner(playerSelection, computerSelection) === ("cheat")) {
        playerScore++;
        roundsComplete++;
        return("You cheated! But... you won.");
    } else if (declareWinner(playerSelection, computerSelection) === ("tie")) {
        console.log("No winners here");
    } else {
        return(`"${playerSelection}" is not an authorized weapon. Try again!`)
    }
}
//finish when UI is added
function checkRounds(roundsComplete) {
    if (roundsComplete < 5) {
        alert("Play game() again!");
    }
    else if (roundsComplete == 5) {
        if (playerScore == 5) {
            return("You won the game bruhv.");
        } else if (computerScore == 5) {
            return("The computer ate your soul.");
        }
    }
}

function game() {
    declareWinner();
    console.log(updateScore());
    checkRounds();
    console.log(`Your score is ${playerScore} and the enemy's score is ${computerScore}. 
    You have ${5 - roundsComplete} rounds remaining.`)
    
}

game()