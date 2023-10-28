function getComputerChoice() {
    let pick = Math.random();
    let choice;
    if (pick <= 0.33) {
        choice = "Rock"
    } else if (0.33 < pick && pick <= 0.66) {
        choice = "Paper"
    } else if (pick > 0.66) {
        choice = "Scissor"
    }   

    return choice;
}

let element;

function playerSelection() {
    element = prompt("Please choose either Rock, Paper, or Scissors:")
    if (element.toLowerCase() === "rock" || element.toLowerCase() === "paper" || element.toLowerCase() === "scissors") {
        element = element.charAt(0).toUpperCase + element.slice(1)
    } else alert("Sorry, you can only pick one of the suggested options")
}

