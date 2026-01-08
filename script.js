const options = ["rock", "paper", "scissors", "lizard", "spock"];

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function play(playerChoice) {
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    document.getElementById("player").innerText =
        "Ty: " + playerChoice;
    document.getElementById("computer").innerText =
        "Počítač: " + computerChoice;

    const result = getWinner(playerChoice, computerChoice);
    document.getElementById("winner").innerText = result;

    updateScore();
}

function getWinner(player, computer) {
    if (player === computer) {
        drawScore++;
        return "Remíza";
    }

    if (
        (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
        (player === "paper" && (computer === "rock" || computer === "spock")) ||
        (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
        (player === "lizard" && (computer === "paper" || computer === "spock")) ||
        (player === "spock" && (computer === "rock" || computer === "scissors"))
    ) {
        playerScore++;
        return "Vyhrál jsi 🎉";
    } else {
        computerScore++;
        return "Vyhrál počítač 💻";
    }
}

function updateScore() {
    document.getElementById("score").innerText =
        "Ty: " + playerScore +
        " | Počítač: " + computerScore +
        " | Remízy: " + drawScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    document.getElementById("score").innerText =
        "Ty: 0 | Počítač: 0 | Remízy: 0";
    document.getElementById("player").innerText = "";
    document.getElementById("computer").innerText = "";
    document.getElementById("winner").innerText = "";
}
