/*DOM, stored into variable. Each variable is an object!*/
let gameResult = document.getElementById('result');
let scoreTab = document.getElementById('score-tab');
let playerComputerMove = document.getElementById('player-computer-move');


// using objects to update the score
let score = 
  // will render this score if something is stored in localStorage.
  // this will convert back the string into onject and be able to access the property & value. 
  /*Manual way to do it! */
  // JSON.parse(localStorage.getItem('score')) 

  /*Renders the score stored in localStoage, if null then render the score object*/
  getLocalStorage('score') || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  // then if score is null, will render this one. 
  // resets the score when null
  // if (score === null) {
  //   score = {
  //     wins: 0,
  //     losses: 0,
  //     ties: 0
  //   }
  // }


/*Shows immediately the score when you open the game. */  
scoringTab();  




/*Generates random move of the computer!*/
function pickComputerMove() {
  const randomNumber = Math.random();

  let compMove = '';

  if (randomNumber > 0 && randomNumber < 1/3) {
    compMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    compMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    compMove = 'scissors';
  }
  return compMove;
}

/**
 this for the autoplay button
*/
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function() {
      playGame(pickComputerMove(), playerMove=pickComputerMove())
    }, 1000)

    // isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    // isAutoPlaying = false;
  }
  isAutoPlaying = !isAutoPlaying;
  
  
}

function playGame(compMove = pickComputerMove(), playerMove) {

  let result = '';
  
  if (playerMove === 'scissors') {
    if (compMove === 'scissors') {
      result = 'Tie';
    } else if (compMove === 'rock') {
      result = 'Loose';
    } else if (compMove === 'paper') {
      result = 'Win';
    }

  } else if (playerMove === 'rock') {
      if (compMove === 'rock') {
      result = 'Tie';
    } else if (compMove === 'paper') {
      result = 'Loose';
    } else if (compMove === 'scissors') {
      result = 'Win';
    }
 
  } else if (playerMove === 'paper') {
      if (compMove === 'paper') {
      result = 'Tie';
    } else if (compMove === 'scissors') {
      result = 'Loose';
    } else if(compMove === 'rock') {
      result = 'Win';
    } 
    
  } //added this block of code simply to check scores. Will do nothing. 
    else if (playerMove === 'showScores') {
    if (compMove === 'paper' || compMove === 'scissors' || compMove === 'rock') {
      result = 'Invalid';
    }
  }

  //this block of code will increment scores by 1 in the object score and will be printed out in alert
  if (result === 'Win') {
    score.wins += 1;
  } else if (result === 'Loose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  // this will add a new class name for gameResult element, in which we can use is CSS to edit the background.
  // green = win, red = loose, yellow = tie.
  gameResult.classList.remove('win', 'loose', 'tie');
  switch (result) {
  case 'Win':
    gameResult.classList.add('win');
    break;
  case 'Loose':
    gameResult.classList.add('loose');
    break;
  case 'Tie':
    gameResult.classList.add('tie');
    break;
}


  //This gonna convert the variable score into string, since localStorage only accept strings as value
  // const scoreToString = JSON.stringify(score);
  // localStorage.setItem('score', scoreToString);
  setLocalStorage('score', score);

  // alert(`You pick ${playerMove}. Computer pick ${compMove}. OUTCOME: ${result}! \ \n Wins: ${score.wins}   Losses: ${score.losses}   Ties: ${score.ties}`);  //the \ \n is a newline.. remember, please dont be confuse.
  console.log(score);

  gameResult.textContent = `Result: ${result}`;

  scoringTab();
  playerComputerMove.innerHTML = `You pick <img src="../images/${playerMove}-emoji.png" class="emoji-button">. Computer pick <img src="../images/${compMove}-emoji.png" class="emoji-button">.`;
}

//shows the score in screen
function scoringTab () {
  scoreTab.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// this function will simply reset the score to zerow
function resetScore() {
  
  score.wins = 0;
  score.losses = 0;
  score.ties = 0

  //will remove the score from local storage, will result to null
  localStorage.removeItem('score');
  console.log('Score Reset!')
  console.log(score);
  scoringTab();
  /*
  playerComputerMove.textContent = '';
  gameResult.textContent = '';
  */
} 

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}




