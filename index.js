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

var selectRock = document.getElementById("rock");
var selectPaper = document.getElementById("paper");
var selectScissors = document.getElementById("scissors");

var eSelector = document.getElementsByClassName("selector");
var eChoices = document.getElementsByClassName("choices");

const getComputerChoice = function() {
    return Math.floor(Math.random() * 3);
}
/* This function is called when the player clicked one of the buttons on the screen. */
const playRound = function(playerChoice, computerChoice) {
    console.log(computerChoice);
    switch(playerChoice){
        case 0:
            switch(computerChoice){
                case 0: /*
                For reference, choices are desginated as such:
                    0 = rock
                    1 = paper
                    2 = scissors
                */
                var playerScore;
                var computerScore;
                var rounds;
                var currentRound;
                
                var selectRock = document.getElementById("rock");
                var selectPaper = document.getElementById("paper");
                var selectScissors = document.getElementById("scissors");
                
                var eSelector = document.getElementsByClassName("selector");
                var eChoices = document.getElementsByClassName("choices");
                
                const getComputerChoice = function() {
                    return Math.floor(Math.random() * 3);
                }
                /* This function is called when the player clicked one of the buttons on the screen. */
                const playRound = function(playerChoice, computerChoice) {
                    console.log(computerChoice);
                    switch(playerChoice){
                        case 0:
                            switch(computerChoice){
                                case 0: 
                                    console.log("Tie");
                                    return;
                                case 1: 
                                    this.computerScore++;
                                    console.log("Lose");
                                    return;
                                case 2:
                                    this.playerScore++;
                                    console.log("Win");
                                    return;
                            }
                        case 1:
                            switch(computerChoice){
                                case 0:
                                    this.playerScore++;
                                    console.log("Win");
                                    return;
                                case 1:
                                    console.log("Tie");
                                    return;
                                case 2:
                                    this.computerScore++; 
                                    console.log("Lose");
                                    return;
                            }
                        case 2:
                            switch(computerChoice){
                                case 0:
                                    this.computerScore++;
                                    console.log("Lose");
                                    return;
                                case 1:
                                    this.playerScore++;
                                    console.log("Win");
                                    return;
                                case 2:
                                    console.log("Tie");
                                    return;
                            }
                    }
                    /*
                    At the end of the round, we check to see if there are any rounds left, and if there are, we display the choices again. 
                    */
                   if(this.currentRound < this.rounds){
                    //Show the choices.
                   }else{
                    endGame();
                   }
                }
                const playGame = function(rounds) {
                    this.rounds = rounds;
                    //Hide selector
                    //Show choices
                    console.log(this.rounds);
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
                }
                function createListeners(){
                    let eButtons = document.querySelectorAll("button");
                    for(let x = 0; x < eButtons.length; x++){
                        eButtons[x].addEventListener("click", playGame(parseInt(eButtons[x].value)));
                    }
                    let select = [this.selectRock, this.selectPaper, this.selectScissors];
                    for(let i = 0; i < select.length; i++){
                        select[i].addEventListener("click", playRound(parseInt(select[i].value), getComputerChoice()));
                    }
                }
                init();
                createListeners();
                    console.log("Tie");
                    return;
                case 1: 
                    this.computerScore++;
                    console.log("Lose");
                    return;
                case 2:
                    this.playerScore++;
                    console.log("Win");
                    return;
            }
        case 1:
            switch(computerChoice){
                case 0:
                    this.playerScore++;
                    console.log("Win");
                    return;
                case 1:
                    console.log("Tie");
                    return;
                case 2:
                    this.computerScore++; 
                    console.log("Lose");
                    return;
            }
        case 2:
            switch(computerChoice){
                case 0:
                    this.computerScore++;
                    console.log("Lose");
                    return;
                case 1:
                    this.playerScore++;
                    console.log("Win");
                    return;
                case 2:
                    console.log("Tie");
                    return;
            }
    }
    /*
    At the end of the round, we check to see if there are any rounds left, and if there are, we display the choices again. 
    */
   if(this.currentRound < this.rounds){
    //Show the choices.
   }else{
    endGame();
   }
}
const playGame = function(rounds) {
    this.rounds = rounds;
    //Hide selector
    //Show choices
    console.log(this.rounds);
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
}
function createListeners(){
    let eButtons = document.querySelectorAll("button");
    for(let x = 0; x < eButtons.length; x++){
        eButtons[x].addEventListener("click", playGame(parseInt(eButtons[x].value)));
    }
    let select = [this.selectRock, this.selectPaper, this.selectScissors];
    for(let i = 0; i < select.length; i++){
        select[i].addEventListener("click", playRound(parseInt(select[i].value), getComputerChoice()));
    }
}
init();
createListeners();