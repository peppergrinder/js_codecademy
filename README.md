# bucket full of scripts from [js_codecademy](https://www.codecademy.com/learn/introduction-to-javascript)

# Contents
- [Setup Shell](#run-javascript-from-terminalshell)
- [7 data types](#7-fundamental-data-types-in-javascript)
- [Temperature converter](#temperature-conversions)
- [Dog Years](#dog-years)
- [Conditional Statements](#conditional-statements)
- [Logical Operators](#logical-operators--and--or-negate-true-becomes-false-and-vice-versa)
- [Short Circuit Evaluation](#use-short-circuit-evaluation-to-assign-writingutensil-variable-below)
- [Ternary Operator](#ternary-operator-shorthand-for-ifelse)
- [Else If](#else-if-statements)
- [Switch](#the-switch-keyword)
- [Functions](#functions)
   - [Function expressions](#function-expressions-anonymous)
   - [Arrow functions](#arrow-functions)
   - [Concise Body Arrow Functions](#concise-body-arrow-functions)
- [Variables](#variables)
   - [Global Variables](#global-variables)
   - [Block Scoped Variables](#block-scoped-variables)
   - [Scope](#scope)

## Run JavaScript from Terminal/Shell
- Navigate to desired folder
- Open a terminal window
- [have node installed](https://treehouse.github.io/installation-guides/mac/node-mac.html)
   - `node -v`
   - `npm -v`
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
A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.
Arguments are values passed into a function when it is called.
```JavaScript
// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}
 
// Calling the function:
sum(3, 6); // 9
```
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
### Function expressions (anonymous)
Anonymous functions in JavaScript do not have a name property. They can be defined using the function keyword, or as an arrow function.
```JavaScript
// Anonymous function
const rocketToMars = function() {
  return 'BOOM!';
}
```
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
### Arrow functions
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
### Concise Body Arrow Functions
Concise body syntax (with one parameter) does not use parentheses, curly braces, or the `return` keyword.
```JavaScript
const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;
```
```JavaScript
const areaOfCircle = radius => Math.PI * radius * radius;
```
Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body.
- Arrow functions with a single parameter do not require () around the parameter list.
- Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword.
```JavaScript
// Arrow function with two parameters 
const sum = (firstParam, secondParam) => { 
  return firstParam + secondParam; 
}; 
console.log(sum(2,5)); // Prints: 7 
 
// Arrow function with no parameters 
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // Prints: hello
 
// Arrow functions with a single parameter 
const checkWeight = weight => { 
  console.log(`Baggage weight : ${weight} kilograms.`); 
}; 
checkWeight(25); // Prints: Baggage weight : 25 kilograms.
 
 
// Concise arrow functions
const multiply = (a, b) => a * b; 
console.log(multiply(2, 30)); // Prints: 60 
```
## Variables
### Global variables
JavaScript variables that are declared outside of blocks or functions can exist in the global scope, which means they are accessible throughout a program. Variables declared outside of smaller block or function scopes are accessible inside those smaller scopes.

Note: It is best practice to keep global variables to a minimum.
```JavaScript
// Variable declared globally
const color = 'blue';
 
function printColor() {
  console.log(color);
}
 
printColor(); // Prints: blue
```
### Block Scoped Variables
const and let are block scoped variables, meaning they are only accessible in their block or nested blocks. In the given code block, trying to print the statusMessage using the console.log() method will result in a ReferenceError. It is accessible only inside that if block.
```JavaScript
const isLoggedIn = true;
 
if (isLoggedIn == true) {
  const statusMessage = 'User is logged in.';
}
 
console.log(statusMessage);
 
// Uncaught ReferenceError: statusMessage is not defined
```
### Scope
Scope is a concept that refers to where values and functions can be accessed.

Various scopes include:

- Global scope (a value/function in the global scope can be used anywhere in the entire program)
- File or module scope (the value/function can only be accessed from within the file)
- Function scope (only visible within the function),
- Code block scope (only visible within a { ... } codeblock)
```JavaScript
function myFunction() {
  
  var pizzaName = "Volvo";
  // Code here can use pizzaName
  
}
 
// Code here can't use pizzaName
```
### Scope recap
- **Scope** refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
- **Blocks** are statements that exist within curly braces {}.
- **Global scope** refers to the context within which variables are accessible to every part of the program.
- **Global variables** are variables that exist within global scope.
Block scope refers to the context within which variables are accessible only within the block they are defined.
- **Local variables** are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
- **Scope pollution** is when too many variables exist in a namespace or variable names are reused.
