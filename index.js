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
/* This function is called when the player clicked one of the buttons on the screen. */
const playRound = function(playerChoice, computerChoice = getComputerChoice()) {
    switch(playerChoice){
        case 0:
            switch(computerChoice){
                case 0: 
                    break;
                case 1: 
                    this.computerScore++; break;
                case 2:
                    this.playerScore++; break;
            }
        case 1:
            switch(computerChoice){
                case 0:
                    this.playerScore++; break;
                case 1:
                    break;
                case 2:
                    this.computerScore++; break;
            }
        case 2:
            switch(computerChoice){
                case 0:
                    this.computerScore++; break;
                case 1:
                    this.playerScore++; break;
                case 2:
                    break;
            }
    }
    /*
    At the end of the round, we check to see if there are any rounds left, and if there are, we display the choices again. 
    */
   if(this.currentRound < this.rounds){
    displayChoices();
   }else{
    endGame();
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
    init();
    displaySelector();
}
const init = function(){
    this.playerScore = 0;
    this.computerScore = 0;
    this.rounds = 0;
    this.currentRound = 0;

    let selectRock = document.getElementById("rock");
    let selectPaper = document.getElementById("paper");
    let selectScissors = document.getElementById("scissors");

    let select = [selectRock, selectPaper, selectScissors];
    for(let i = 0; i < select.length; i++){
        console.log(select[i]);
    }
}
init();