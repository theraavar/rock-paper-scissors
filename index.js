var playerScore;
var computerScore;

function playGame(numberOfRounds){

}
function playRound(playerSelection, computerSelection = getComputerSelection()){
    playerSelection = 1;
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