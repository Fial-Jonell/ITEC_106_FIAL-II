const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playgame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = ` ${playerChoice}`;
    computerDisplay.textContent = ` ${computerChoice}`;
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove("win", "lose");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("win");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
     
        case "YOU LOSE!":
            resultDisplay.classList.add("lose");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "TIE!":
            resultDisplay.classList.add("tie");
            break;
    }
    
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "";
}