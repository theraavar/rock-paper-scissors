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
                case "paper": return "You lose! Paper covers rock!";
                case "scissors": return "You win! Rock smashes scissors!";
            }
        case "paper":
            switch(computerSelection){
                case "rock": return "You win! Paper covers rock!";
                case "paper": return "It's a tie!";
                case "scissors": return "You lose! Scissors cuts paper!";
            }
        case "scissors":
            switch(computerSelection){
                case "rock": return "You lose! Rock smashes scissors!";
                case "paper": return "You win! Scissors cuts paper!";
                case "scissors": return "It's a tie!";
            }
    }
}
function playGame(rounds){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < rounds; i++){
        let playerSelection = prompt(); //User input; will be changed to buttons or something later.
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if(result.includes("win") === true){
            playerScore++;
        }else if(result.includes("lose") === true){
            computerScore++;
        }
        console.log(playerScore);
        console.log(computerScore);
    }
    if(playerScore > computerScore){
        return "You won the game! Congratulations!";
    }else if(playerScore < computerScore){
        return "The computer beat you this time!";
    }else{
        return "It is a tie! So close!";
    }
}
console.log(playGame(5));