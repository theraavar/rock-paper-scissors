function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
    }
}
/*
function playRound(playerSelection, computerSelection){
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
*/
function playGame(rounds){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < rounds; i++){
        let playerSelection = "rock"; //prompt("Please type one of the following: rock | paper | scissors");
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

/*
For reference, choices are desginated as such:
    0 = rock
    1 = paper
    2 = scissors
*/
var playerScore;
var computerScore;
var rounds;
var currentRound;

const getComputerChoice = function() {
    return Math.floor(Math.random() * 3);
}
const playRound = function(playerChoice, computerChoice = getComputerChoice()) {
    switch(playerChoice){
        case 0:
            switch(computerChoice){
                case 0: 
                    return;
                case 1: 
                    this.computerScore++; return;
                case 2:
                    this.playerScore++; return;
            }
        case 1:
            switch(computerChoice){
                case 0:
                    this.playerScore++; return;
                case 1:
                    return;
                case 2:
                    this.computerScore++; return;
            }
        case 2:
            switch(computerChoice){
                case 0:
                    this.computerScore++; return;
                case 1:
                    this.playerScore++; return;
                case 2:
                    return;
            }
    }
    /*
    At the end of the round, we check to see if there are any rounds left, and if there are, we display the choices again. 
    */
   if(this.currentRound < this.rounds){
    displayChoices;
   }else{
    endGame;
   }
}
const playGame = function(rounds) {
    this.rounds = rounds;
    /*
    Once we determine how many rounds we play, we will hide the selection for rounds.
    */
}
const displaySelector = function () {

}
const displayChoices = function() {

}
const displayWinner = function() {

}
const endGame = function() {
    if(this.playerScore > this.computerChoice){
        //WIN
    }else if(this.playerScore < this.computerChoice){
        //LOSE
    }else{
        //TIE
    }
    init;
    displaySelector;
}
const init = function(){
    this.playerScore = 0;
    this.computerScore = 0;
    this.rounds = 0;
    this.currentRound = 0;
}
init;