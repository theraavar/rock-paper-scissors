var playerScore;
var computerScore;

var currentRound;
var totalRounds;

function playGame(numberOfRounds){
    this.totalRounds = numberOfRounds;
}
function playRound(playerSelection, computerSelection = getComputerSelection()){
    if(playerSelection === computerSelection){
        return "It is a tie!";
    }
    switch (playerSelection){
        case 0:
            if(computerScore === 1){
                return "You have lost!";
            }else{
                return "You have won!";
            }
        case 1:
            if(computerScore === 0){
                return "You have won!";
            }else{
                return "You have lost!";
            }
        case 2:
            if(computerScore === 1){
                return "You have lost!";
            }else{
                return "You have won!";
            }
    }
}
function getComputerSelection(){
    return Math.floor(Math.random() * 3);
}
function init(){
    this.playerScore = 0;
    this.computerScore = 0;
    this.currentRound = 0;
    this.totalRounds = 0;
}
init();