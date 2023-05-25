# bucket full of scripts from js_codecademy course
### https://www.codecademy.com/learn/introduction-to-javascript

# Run JavaScript from Terminal/Shell
- Navigate to desired folder
- Open a terminal window
- [have node installed](https://treehouse.github.io/installation-guides/mac/node-mac.html)
- First list item
   - First nested list item
     - Second nested list item
  -`node -v`
  -`npm -v`
- open in terminal `node jsfile.js`

## 7 fundamental data types in JavaScript: 
### strings, numbers, booleans, null, undefined, symbol, and object.
<!-- line numbers not supported in GitHub code blocks: {r, attr.source='.numberLines'} -->
```JavaScript
//Create a Variable: var - Old School until 2015
var favouriteFood = 'pizza';
var numOfSlices = (8);
console.log(favouriteFood);
console.log(numOfSlices);
```
```JavaScript
//Create a Variable: let
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
```
```JavaScript
//Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
//// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
//// These console.log() statements below will help you check the values of the variables.
//// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);
```
```JavaScript
//The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
```
```JavaScript
//String Concatenation with Variables
let favoriteAnimal = 'Rhino';
console.log('My favourite animal: ' + favoriteAnimal);
```
```JavaScript
//template literals - use backticks `
const myName = 'Baba Voss';
const myCity = 'Santiago';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
```
```JavaScript
//typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);
```
## Temperature conversions
```JavaScript
////new constant variable "kelvin"
const kelvin = 100;
////convert kelvin to celsius
const celsius = kelvin - 273;
////convert celsius to Newton
let newton = celsius * (33 / 100);
////round down newton temp
newton = Math.floor(newton);
////convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
////round down fahrenheit temp
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees in Celsius.`);
console.log(`The temperature is ${newton} degrees in Newton.`);
```


## Dog Years
```JavaScript
//Define age
const myAge = 3;
//The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;
//Subtract 2 from my age
let laterYears = myAge - 2;
//Each year following equates to 4 dog years.
laterYears *= 4;
//Sum up early and later years
let myAgeInDogYears = earlyYears + laterYears;
//Get name to lowercase
let myNewName = 'Shiva'.toLowerCase();
//Return name, age, and age in dog years
console.log(`My name is ${myNewName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
```

## Conditional Statements
```JavaScript
let hungerLevel = 7;
if (hungerLevel <= 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
};
```
## Logical Operators: && (and), || (or), !(negate= true becomes false and vice versa)
```JavaScript
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' || tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
};
```

## Use short circuit evaluation to assign  writingUtensil variable below:
```JavaScript
let tool = ''; //change me
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
```
## Ternary Operator (shorthand for if..else)
```JavaScript
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');
```
## Ternary
```JavaScript
let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!')
: console.log("I don't love that!");
```

## Else If Statements
```JavaScript
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}
```

## The switch keyword
```JavaScript
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
```
## Functions
```JavaScript
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name +'! We appreciate your business.');
}
sayThanks('Cole');
```
```JavaScript
function makeShoppingList(item1 = 'milk', item2 ='bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();
```
```JavaScript
function monitorCount(rows, columns) {
  const numOfMonitors = rows * columns;
  return numOfMonitors;
}

console.log(monitorCount(5,4))
```
## Function expressions (anonymous)
```JavaScript
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater('Tuesday'));
```
## Arrow functions
```JavaScript
const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater2('Wednesday'));
```
## Concise Body Arrow Functions
```JavaScript
const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;
```
