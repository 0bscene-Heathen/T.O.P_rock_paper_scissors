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

