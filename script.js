//--------------new function---------------------
//Define a function allowing the computer make a choice among rock, paper and scissors
//Computer choice is triggered by function defined

function computerPlay() {
  const choices = ["rock", "paper", "scissors"] //An array form will be fine for random choice
  let result = choices[Math.floor(Math.random()*choices.length)] //Define a variable in order to return randomly chosen value
  return result;
}

//--------------new function---------------------
//Define a function for a single round in the game
//User's choice will be compared by computer's selection

function playRound(playerSelection, computerSelection) { //2 different parameters will be used for the comparison inside the function
  
//--new conditional for comparison--

//User will win if below mentioned conditions occur
  if (playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
    humanScore++; //humanScore variable will be defined in order to both increase and compare User's score
    return win; //win variable will be defined in order to show the result of the round if user wins
  }
//User will lose if below mentioned conditions occur
  else if (playerSelection=="rock" && computerSelection=="paper" || playerSelection=="scissors" && computerSelection=="rock" || playerSelection=="paper" && computerSelection=="scissors"){
    computerScore++;//computerScore variable will be defined in order to both increase and compare Computer's score
    return lose;//lose variable will be defined in order to show the result of the round if user loses
  }
//Neither side will win or lose if below mentioned condition occur
    else if (playerSelection == computerSelection){
    //no need to define a tieScore in a 5 round game
    return tie;//tie variable will be defined in order to show the result of the round if neither side wins or loses
  }
//User should be warned if he/she does not enter a value or makes a choice other than rock, paper or scissors
  else {
    return "You must write down rock, paper or scissors! Please try again.\n-----Round End-----";
  }
}

//Function playRound() Parameters should be defined
//A pop-up box will be provided for the user enter his/her choice

let text = (prompt("Please enter your choice: e.g. rock, paper or scissors")); //user enters choice in a pop-up box
let playerSelection = text.toLowerCase(); //case-insensitive player choice converts a string to lowercase letters to be compared by computer's choice successfully
console.log (`You choose ${playerSelection}`); //show user's choice in lowercase

let computerSelection = computerPlay();  //declaring a randomly selected choice by computer
console.log(`The computer chooses ${computerSelection}`);//show computer's choice

//Score variables should be defined

let humanScore = 0;
let computerScore = 0;

//Round-game result variables should be defined

const win="You Won this round!\n-----Round End-----";
const lose="You Lost this round!\n-----Round End-----";
const tie= "This round is a tie!\n-----Round End-----";

//Showing the Round-game results in the console

console.log(playRound(playerSelection, computerSelection)); //Single round result will be shown

console.log("Your score: " + humanScore + " " + "Computer score: " + computerScore);//The score will be counted according to the single round result



