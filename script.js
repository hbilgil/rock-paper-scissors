//Define a function allowing the computer make a choice among rock, paper and scissors
//Computer choice is triggered by function defined

function computerPlay() {
  const choices = ["rock", "paper", "scissors"] //An array form will be fine for random choice
  let result = choices[Math.floor(Math.random()*choices.length)] //Define a variable in order to return randomly chosen value
  return result;
}

//Define a function for a single round in the game
//User's choice will be compared by computer's selection

function playRound(playerSelection, computerSelection) { //2 different parameters will be used for the comparison inside the function
