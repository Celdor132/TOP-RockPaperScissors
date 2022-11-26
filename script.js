console.log("Hello there, welcome to the game! Type 'game()' and hit enter to begin.");
//variables for global access
let roundsComplete = 0;
let playerScore = 0;
let computerScore = 0;
let roundWinner = null

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    return(playerChoice);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];  //choices for the computer
    let computerChoice = choices[Math.floor(Math.random()* 3)]
    return(computerChoice);
}

function declareWinner() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(`The player chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`);
    console.log(`The computer chose ${computerSelection.charAt(0).toUpperCase(0) + computerSelection.slice(1)}`);
        //player and computer choose the same
    if (playerSelection === computerSelection) {
        console.log("Thats a tie.");
        roundWinner = "tie";

        //player chooses rock
    } else if (playerSelection === ("rock")) {
        if (computerSelection === ("scissors")) {
            console.log("Your rock smashed their scissors.");
            roundWinner = "player";
        }
        if (computerSelection === ("paper")) {
            console.log("Your rock was smothered by their paper.");
            roundWinner = "computer";
        }

        //player chooses paper
    } else if (playerSelection === ("paper")) {
        if (computerSelection === ("rock")) {
            console.log("Your paper smothered the rock.");
            roundWinner = "player";
        }
        if (computerSelection === ("scissors")) 
            console.log("Your paper was shredded by their scissors.");
            roundWinner = "computer";

        //player chooses scissors
    } else if (playerSelection === ("scissors")) {
        if (computerSelection === ("paper")) {
            console.log("Your scissors shredded their paper.");
            roundWinner = "player";
        }
        if (computerSelection === ("rock")) {
            console.log("Your scissors were crushed by their rock.");
            roundWinner = "computer";
        }

        //player chooses gun
    } else if (playerSelection === ("gun")) {
        console.log("You shot them. That might be considered cheating.");
        roundWinner = "player-cheat";
    } else if (playerSelection === ("quit")) {
        console.log("You just... gave up?");
        roundWinner = "quit";

        //player doesn't choose from the options
    } else {
        console.log(`'${playerSelection}' is not an authorized weapon.`);
        roundWinner = "no-round";
    }
}
//updates score based on declareWinner
function updateScore() {
    if (roundWinner === "player") {
        playerScore++;
        roundsComplete++;
    } else if (roundWinner === "computer") {
        computerScore++;
        roundsComplete++;
    } else if (roundWinner === "player-cheat") {
        playerScore++;
        roundsComplete++;
    } else if (roundWinner === ("quit")) {
        computerScore++;
        roundsComplete++;
    } else if (roundWinner === "tie") {
        console.log("Try that again...");
    } else if (roundWinner === "no-round") {
        console.log("No change to score");
    } else {
        console.log("Something went wrong.")
    }

}
//checks if 5 rounds have been played
function checkRounds() {
    if (roundsComplete < 5) {
        console.log("Play 'game()' again!");
    }
    else if (roundsComplete === 5) {
        if (playerScore > computerScore) {
            console.log("You won the game bruhv.");
            resetGame();
       }else if (computerScore > playerScore) {
            console.log("The computer ate your soul.");
            resetGame();
        }
    } 
    }

//resets game, if user accepts, to be finished with UI at a later date
function resetGame() {
    let reset = prompt("Reset the game? type 'yes' to reset").toLowerCase();
    if (reset == "yes"){
      alert("This page will be reset in 5 seconds");
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    } else {
      alert("You have canceled the page reset! Resetting rounds and scores.");
      roundsComplete = 0;
      playerScore = 0
      computerScore = 0
    }
}

//calls each game function
function game() {
    declareWinner();
    updateScore();
    console.log(`Your score is ${playerScore} and the enemy's score is ${computerScore}. 
        You have ${5 - roundsComplete} rounds remaining.`);
    checkRounds();
}