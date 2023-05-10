/* These are variables related to our DOM. */
var eRounds = document.querySelector(".container-rounds");
var eChoices = document.querySelector(".container-choices");
var eWinner = document.querySelector(".container-winner");

/* This is a simple toggle for whether the element is displayed or not. */
function toggleVisibility(e){
    if(e.style.display === "none"){
        e.style.display = "block";
    }else{
        e.style.display = "none";
    }
}

/* We hide the following sections by default on load. */
toggleVisibility(eChoices);
toggleVisibility(eWinner);

/* These are variables related to the game. */
var playerScore;
var computerScore;

var currentRound;
var totalRounds;

/* This is called when the user selects how many rounds they want to play. */
function playGame(numberOfRounds){
    this.totalRounds = numberOfRounds;
}
/* This is called when the user selects one of the choices. */
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
/* This is a simple random return of 0, 1 or 2. */
function getComputerSelection(){
    return Math.floor(Math.random() * 3);
}
/* We call this after everything else is loaded so our variables have a base value. We also use this to reset the game after. */
function init(){
    this.playerScore = 0;
    this.computerScore = 0;
    this.currentRound = 0;
    this.totalRounds = 0;
}
init();
