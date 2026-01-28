let choiceOptions = ["rock", "paper", "scissors"];

function getComputerChoice(computerChoice) {
	return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
console.log("Computer choose:", getComputerChoice(choiceOptions));

function getHumanChoice() {
	let humanChoice = prompt("What is your choice?");
	if (choiceOptions.includes(humanChoice.toLowerCase())) {
		console.log("Player choose:", humanChoice.toLowerCase());
	} else {
		alert("Invalid options");
	}
	return humanChoice;
}
getHumanChoice();

playerScore = 0;
computerScore = 0;
