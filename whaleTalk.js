/*
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

1. There are no consonants. Only vowels excluding “y”.
2. The u‘s and e‘s are extra long, so we must double them in our program.
*/
const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []; //place to store vowels from input

for (let i = 0; i < input.length; i++) {
  //console.log(i);
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j);
    if (input[i] === vowels[j]) {
      //console.log(vowels[j]);
      resultArray.push(vowels[j]);
    }
  }
}
//console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);