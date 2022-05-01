
//Score variables should be defined

let humanScore = 0;
let computerScore = 0;
let roundWinner ='';

/*--------------new function---------------------
Define a function for a single round in the game
User's choice will be compared by computer's selection
------------------------------------------------*/

function playRound(playerSelection, computerSelection) { //2 different parameters will be used for the comparison inside the function
  
  //--new conditional for comparison--
  
  //User will win if below mentioned conditions occur
    if (playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
      humanScore++; //humanScore variable will be defined in order to both increase and compare User's score
      roundWinner = 'player' //win variable will be defined in order to show the result of the round if user wins
    }
  //User will lose if below mentioned conditions occur
    else if (playerSelection=="rock" && computerSelection=="paper" || playerSelection=="scissors" && computerSelection=="rock" || playerSelection=="paper" && computerSelection=="scissors"){
      computerScore++;//computerScore variable will be defined in order to both increase and compare Computer's score
      roundWinner = 'computer'//lose variable will be defined in order to show the result of the round if user loses
    }
  //Neither side will win or lose if below mentioned condition occur
      else (playerSelection == computerSelection){
      //no need to define a tieScore in a 5 round game
      roundWinner = 'tie'//tie variable will be defined in order to show the result of the round if neither side wins or loses
    }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
  }

/*--------------new function---------------------
Define a function allowing the computer make a choice among rock, paper and scissors
Computer choice is triggered by function defined
------------------------------------------------*/

function computerPlay() {
  const choices = ["rock", "paper", "scissors"] //An array form will be fine for random choice
  let result = choices[Math.floor(Math.random()*choices.length)] //Define a variable in order to return randomly chosen value
  return result;
}

let computerSelection = computerPlay();  //declaring a randomly selected choice by computer

// UI DOM manipulations and event listeners

const roundScoreInfo = document.getElementById('roundScoreInfo');
const scoreMessage = document.getElementById('roundScoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const rock = document.getElementById('rockButton');
const paper = document.getElementById('paperButton');
const scissors = document.getElementById('scissorsButton');

const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

rockButton.addEventListener('click', () => pushClick('ROCK'))
paperButton.addEventListener('click', () => pushClick('PAPER'))
scissorsButton.addEventListener('click', () => pushClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)


/*--------------new function---------------------
Define a function allowing the game ends whichever 
side has reached at 5 points
------------------------------------------------*/

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}


/*--------------new function---------------------
Define a function allowing the player make a choice
------------------------------------------------*/

function pushClick(playerSelection) {
  if (isGameOver()) {
    openEndgameMessage();
    return;
  }

  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameMessage();
    setFinalMessage();
  }
}


/*--------------new function---------------------
Define a function for updating choices of both sides
User's & Computer's choices will be shown on the screen in each round
------------------------------------------------*/

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      playerChoice.textContent = '✊'
      break
    case 'paper':
      playerChoice.textContent = '✋'
      break
    case 'scissors':
      playerChoice.textContent = '✌'
      break
  }

  switch (computerSelection) {
    case 'rock':
      computerChoice.textContent = '✊'
      break
    case 'paper':
      computerChoice.textContent = '✋'
      break
    case 'scissors':
      computerChoice.textContent = '✌'
      break
  }
}

/*--------------new function---------------------
Define a function for updating scores of both sides
User's & Computer's choices will be updated on the screen in each round
------------------------------------------------*/

function updateScore() {
  if (roundWinner === 'player') {
    roundScoreInfo.textContent = 'You won this round!'
  } else if (roundWinner === 'computer') {
    roundScoreInfo.textContent = 'You lost this round!'
  } else {
    roundScoreInfo.textContent = 'This round is a tie!'
  }

  playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

/*--------------new function---------------------
Define a function for updating score messages according to choices
Score messages will be updated on the screen in each round
------------------------------------------------*/

function updateScoreMessage(roundWinner, playerSelection, computerSelection) {
  if (roundWinner === 'player') {
    roundScoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`
    return
  }
    else if (roundWinner === 'computer') {
    roundScoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`
    return
  }
    else {
    roundScoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
  )} ties with ${computerSelection.toLowerCase()}`
}

/*--------------new function---------------------
Define a function for making a string's first letter capitalized
------------------------------------------------*/

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

/*--------------new function---------------------
Define a function for looping a game until  
either player or computer reaches at 5 points
Final result and score will be defined too
------------------------------------------------*/

function game() {

//--new for...in Loop for an iteration--

for (let i = 0; i < 4; i++) {

//no need to define user's and computer's choices again, just assigning here

  text = (prompt("Please enter your choice: e.g. rock, paper or scissors")); //user enters choice in a pop-up box
  playerSelection = text.toLowerCase(); // case-insensitive player choice
  console.log (`You choose ${playerSelection}`); //show user's choice in lowercase letters

  computerSelection = computerPlay(); //update computer's choice
  console.log(`The computer chooses ${computerSelection}`); //show computer's choice

  console.log(playRound(playerSelection, computerSelection)); //Single round result will be shown again and again until the end

  console.log("Your score: " + humanScore + " " + "Computer score: " + computerScore);//The score will be counted again and again

}

//New variable should be defined for the game result

let totalScore = humanScore + computerScore; //Final score is the sum of the user's and computer's scores

//--new conditional for comparison--

//User will win the game if below mentioned conditions occur
if (humanScore>computerScore && totalScore != 0){
  return "Congratulations, You Won this game!\n-----END OF THE GAME-----";
}
//User will lose the game if below mentioned conditions occur
  else if (humanScore<computerScore && totalScore != 0){
    return "Unfortunately, You Lost this game!\n-----END OF THE GAME-----";
  }
//Neither side will win or lose the game if below mentioned conditions occur
  else if (humanScore==computerScore && totalScore != 0) {
    return "Upss, This game is a tie!\n-----END OF THE GAME-----"
  }
//User should be warned at the end of the game if he/she does not enter a value or makes a choice other than rock, paper or scissors in each round played
  else {
    return "Sorry, You should make a meaningful choice: e.g. rock, paper or scissors";
  }

}

//Showing the Final game results in the console

console.log(game()); //play the loop

console.log("YOUR FINAL SCORE: " + humanScore + " " + "COMPUTER'S FINAL SCORE: " + computerScore);