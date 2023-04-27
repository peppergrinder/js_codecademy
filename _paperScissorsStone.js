//https://gist.github.com/codecademydev/6753c664618f5e509c84def5ed7a684d
//https://github.com/peppergrinder/js_paperScissorsStone
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
    } else {
    console.log('Error, please type rock, paper or scissors.');
    }
  }
  //console.log(getUserChoice('Paper'));
  //console.log(getUserChoice('Skateboard'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
  }
};

//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());
  
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Its a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, Computer Won (paper covers rock)!';
    } else {
      return 'Congratulations, You Won! (rock destroys scissors)';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, Computer Won (scissors cut paper)!';
    } else {
      return 'Congratulations, You Won!(paper covers rock)';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'Sorry, Computer Won (rock destroys scissors)!';
    } else {
      return 'Congratulations, You Won! (scissors cut paper)';
    }
  }
};

/*
//Test above function determineWinner()
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('scissors', 'paper'));
*/
 
const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
  
playGame()