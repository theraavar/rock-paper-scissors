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
   
}
function playRound(playerChoice, computerChoice){
  
}
