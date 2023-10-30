function getComputerChoice() {
    let num = Math.random();
    let choice;
    if (num <= 0.33) {
        choice = "Rock"
    } else if (0.33 < num && num <= 0.66) {
        choice = "Paper"
    } else if (num > 0.66) {
        choice = "Scissors"
    }   
    return choice;
}

let element

function playerChoice() {
    element = prompt("Please choose either Rock, Paper, or Scissors:")
    if (element.toLowerCase() === "rock" || element.toLowerCase() === "paper" || element.toLowerCase() === "scissors") {
        element = element[0].toUpperCase() + element.slice(1).toLowerCase();
    } else alert("Sorry, you can only pick one of the suggested options")

    return element;
}

let playerSelection = playerChoice();
let ComputerChoice = getComputerChoice();

function playRound(playerSelection, ComputerChoice) {
    if (playerSelection === "Rock" && ComputerChoice === "Paper") {
        return "You lose! Paper beats Rock."
    } else if (playerSelection === "Paper" && ComputerChoice === "Rock") {
        return "You win! Paper beats Rock."
    } else if (playerSelection === "Paper" && ComputerChoice === "Scissors") {
        return "You lose! Scissor beats Paper."
    } else if (playerSelection === "Scissors" && ComputerChoice === "Paper") {
        return "You win! Scissors beats Paper."
    } else if (playerSelection === "Rock" && ComputerChoice === "Scissors") {
        return "You win! Rock beats Scissors."
    } else if (playerSelection === "Scissors" && ComputerChoice === "Rock") {
        return "You lose! Rock beats Scissors."
    } else {
        return `It's a tie! you both used ${playerSelection}`
    }
}


