function getPlayerChoice(){
  var choice = document.querySelectorAll("input[type="image"]:click");
  if(choice.name === "rock"){
    return 0;
  }else if(choice.name === "paper"){
    return 1;
  }else if(choice.name === "scissors"){
    return 2;
  }else{
    return undefined;
  }                                  
}
function getComputerChoice(){
  return Math.floor(Math.random() * 3);
}
function playRound(playerChoice, computerChoice = getComputerChoice()){
    switch (playerChoice) {
        /* If the player is rock. */
        0: switch (computerChoice) {
            0: return "You have tied."
            1: return "You have lost."
            2: return "You have won."
        }
        /* If the player is paper. */
        1: switch (computerChoice) {
            0: return "You have won."
            1: return "You have tied."
            2: return "You have lost."
        }
        /* If the player is scissors. */
        2: switch (computerChoice) {
            0: return "You have lost."
            1: return "You have won."
            2: return "You have tied."
        }
    }
}
