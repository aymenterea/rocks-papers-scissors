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

