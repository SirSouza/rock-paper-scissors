let choiceOptions = ["rock", "paper", "scissors"];

function getComputerChoice(computerChoice) {
	return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
const computerSelection = getComputerChoice(choiceOptions);
console.log("Computer choose:", computerSelection);

function getHumanChoice() {
	let humanChoice = prompt("What is your choice?");
	if (choiceOptions.includes(humanChoice.toLowerCase())) {
		console.log("Player choose:", humanChoice.toLowerCase());
	} else {
		alert("Invalid options");
	}
	return humanChoice.toLowerCase();
}
const humanSelection = getHumanChoice();

function playGame() {
	let playerScore = 0;
	let computerScore = 0;
	function playRound(humanChoice, computerChoice) {
		if (humanChoice === computerChoice) {
			console.log("Draw");
		} else if (
			(humanChoice === "paper" && computerChoice === "rock") ||
			(humanChoice === "rock" && computerChoice === "scissors") ||
			(humanChoice === "scissors" && computerChoice === "paper")
		) {
			console.log("player won");
			playerScore++;
		} else {
			console.log("Computer Won");
			computerScore++;
		}
	}

	playRound(humanSelection, computerSelection);
	console.log(playerScore, computerScore);
}
console.log(playGame());