// Get the a randomized choice of the computer (Rock, Paper, or Scissors)
function getComputerChoice() {
    let randomized = Math.floor(Math.random() * 3);
    if (randomized === 0) {
        return "rock";
    } 
    else if (randomized === 1) {
        return "paper";
    }
    else if (randomized === 2) {
        return "scissors";
    }
}

// Get the human choice and return it
function getHumanChoice() {
    return prompt("Type Rock, Paper, or Scissors.");
}

// Declare User score and Computer Score 
let humanScore = 0;
let computerScore = 0;

// Game round logic 
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1).toLowerCase();

    if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore += 1;
        console.log(`You lose!, ${computerChoice} beats ${humanChoice}`)
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore += 1;
        console.log(`You Win!, ${humanChoice} beats ${computerChoice}`)
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore += 1;
        console.log(`You Win!, ${humanChoice} beats ${computerChoice}`)
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore += 1;
        console.log(`You lose!, ${computerChoice} beats ${humanChoice}`)
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore += 1;
        console.log(`You Win!, ${humanChoice} beats ${computerChoice}`)
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore += 1;
        console.log(`You lose!, ${computerChoice} beats ${humanChoice}`)
    }
    else {
        console.log("Tie!")
    }
}

// Game logic
function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You Won The Game!");
    } else {
        console.log("You Lost! :(");
    }
}

playGame()