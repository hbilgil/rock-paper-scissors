
//Score variables should be defined

let playerScore = 0;
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
      playerScore++; //humanScore variable will be defined in order to both increase and compare User's score
      roundWinner = 'player'; //win variable will be defined in order to show the result of the round if user wins
    }
  //User will lose if below mentioned conditions occur
      else if (playerSelection=="rock" && computerSelection=="paper" || playerSelection=="scissors" && computerSelection=="rock" || playerSelection=="paper" && computerSelection=="scissors"){
      computerScore++;//computerScore variable will be defined in order to both increase and compare Computer's score
      roundWinner = 'computer';//lose variable will be defined in order to show the result of the round if user loses
      }
  //Neither side will win or lose if below mentioned condition occur
      else if (playerSelection == computerSelection) {
      //no need to define a tieScore in a 5 round game
      roundWinner = 'tie';//tie variable will be defined in order to show the result of the round if neither side wins or loses
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
const roundScoreMessage = document.getElementById('roundScoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const endgameMessage = document.getElementById('endgameMessage');
const endgameMsg = document.getElementById('endgameMsg');
const restartBtn = document.getElementById('restartBtn');
const finalWindow = document.getElementById('finalWindow');

rock.addEventListener('click', () => pushClick('rock'));
paper.addEventListener('click', () => pushClick('paper'));
scissors.addEventListener('click', () => pushClick('scissors'));
restartBtn.addEventListener('click', restartGame);
finalWindow.addEventListener('click', closeEndgameMessage);


/*--------------new function---------------------
Define a function allowing the game ends whichever 
side has reached at 5 points
------------------------------------------------*/

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
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
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScore();

  if (isGameOver()) {
    openEndgameMessage();
    setFinalMessage();
  }
}

/*--------------new function---------------------
Define a function for restarting the game
------------------------------------------------*/
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundScoreInfo.textContent = 'Round-Winner';
  roundScoreMessage.textContent = 'Whoever reaches the 5 points first, is the winner!';
  playerScorePara.textContent = 'Player: 0';
  computerScorePara.textContent = 'Computer: 0';
  playerChoice.textContent = '❔';
  computerChoice.textContent = '❔';
  endgameMessage.classList.remove('active');
  finalWindow.classList.remove('active');
}

/*--------------new function---------------------
Define 3 bonded functions allowing the player restart the game
------------------------------------------------*/

function openEndgameMessage() {
  endgameMessage.classList.add('active')
  finalWindow.classList.add('active')
}

function closeEndgameMessage() {
  endgameMessage.classList.remove('active');
  finalWindow.classList.remove('active');
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'Congratulations!!! \n You Won this game!')
    : (endgameMsg.textContent = 'Upss!!! \n You Lost this game!')
}

/*--------------new function---------------------
Define a function for updating choices of both sides
User's & Computer's choices will be shown on the screen in each round
------------------------------------------------*/

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      playerChoice.textContent = '✊';
      break;
    case 'paper':
      playerChoice.textContent = '✋';
      break;
    case 'scissors':
      playerChoice.textContent = '✌';
      break;
  }

  switch (computerSelection) {
    case 'rock':
      computerChoice.textContent = '✊';
      break;
    case 'paper':
      computerChoice.textContent = '✋';
      break;
    case 'scissors':
      computerChoice.textContent = '✌';
      break;
  }
}

/*--------------new function---------------------
Define a function for updating scores of both sides
User's & Computer's choices will be updated on the screen in each round
------------------------------------------------*/

function updateScore() {
  if (roundWinner === 'player') {
    roundScoreInfo.textContent = 'You won this round!';
  } else if (roundWinner === 'computer') {
    roundScoreInfo.textContent = 'You lost this round!';
  } else {
    roundScoreInfo.textContent = 'This round is a tie!';
  }

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}

/*--------------new function---------------------
Define a function for updating score messages according to choices
Score messages will be updated on the screen in each round
------------------------------------------------*/

function updateScoreMessage(roundWinner, playerSelection, computerSelection) {
  if (roundWinner === 'player') {
    roundScoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
    else if (roundWinner === 'computer') {
    roundScoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }
    else {
    roundScoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
  )} ties with ${computerSelection.toLowerCase()}`;
  }
}
/*--------------new function---------------------
Define a function for making a string's first letter capitalized
------------------------------------------------*/

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}