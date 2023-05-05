function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
    }
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase(); //Can't never trust a user to type correctly around here.
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock": return "It's a tie!";
                case "scissors": return "You win! Rock smashes scissors!";
                case "paper": return "You lose! Paper covers rock!";
            }
        case "scissors":
            switch(computerSelection){
                case "rock": return "You lose! Rock smashes scissors!";
                case "scissors": return "It's a tie!";
                case "paper": return "You win! Scissors cuts paper!";
            }
        case "paper":
            switch(computerSelection){
                case "rock": return "You win! Paper covers rock!";
                case "scissors": return "You lose! Scissors cuts paper!";
                case "paper": return "It's a tie!";
            }
    }
}
console.log(playRound("rock", getComputerChoice()));