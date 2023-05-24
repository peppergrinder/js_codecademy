let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let earlyRego = true;
let runnerAge = 20;

if (earlyRego === true && runnerAge > 18) {
  raceNumber += 1000;
  console.log(`First race starts at 9:30. Your starting number is: ${raceNumber}`);
} else if (earlyRego === false && runnerAge > 18) {
  console.log(`Second race starts at 11:00. Your starting number is: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Third race starts at 12:30. Your starting number is: ${raceNumber}`);
} else {
  console.log(`Please see registration desk`);
}