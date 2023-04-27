//>Eight Ball fortune teller using if-else if
let userName = 'ElseIf';
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
if (eightBall === 0) {
    console.log('It is certain');
} else if (eightBall === 1) {
    console.log('It is decidedly so');
} else if (eightBall === 2) {
    console.log('Reply hazy, try again');
} else if (eightBall === 3) {
    console.log('Cannot predict now');
} else if (eightBall === 4) {
    console.log('Do not count on it');
} else if (eightBall === 5) {
    console.log('My sources say no');
} else if (eightBall === 6) {
    console.log('Outlook not so good');
} else if (eightBall === 7) {
    console.log('Signs point to yes');
} else {
    console.log('Invalid season.');
}