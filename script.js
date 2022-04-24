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
}

//Parameters should be defined and
//A pop-up box will be provided for the user enter his/her choice

let text = (prompt("Please enter your choice: e.g. rock, paper or scissors")); //user enters choice in a pop-up box
let playerSelection = text.toLowerCase(); // case-insensitive player choice converts a string to lowercase letters to be compared by computer's choice successfully
let computerSelection = computerPlay();  //declaring a randomly selected choice by computer
