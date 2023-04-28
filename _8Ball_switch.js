//Eight Ball fortune teller
let userName = 'cyril';
userName ? console.log(`Hello ${userName}!`)
: console.log(`Hello!`);

let userQuestion = 'This is a user question'
userName ? console.log(`${userName}, your question is: ${userQuestion}?`)
: console.log(`Your question is: ${userQuestion}`)

//let randomNumber = '';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
/*
console.log(getRandomInt(8));
// Expected output: 0 -> 7
*/
let eightBall = getRandomInt(8);
console.log(`var 8ball: ${eightBall}`);
switch (eightBall) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy, try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
    break;
  default:
    console.log('Something went wrong.');
    break;
}