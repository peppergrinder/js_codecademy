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
   - [Scope benefits](#scope-benefits)
   - [Scope recap](#scope-recap)
- [Arrays](#arrays)
   - [Create an Array](#create-an-array-literal)
   - [Accessing Elements](#accessing-elements)
   - [Updating Elements](#update-elements)
   - [The .lenght Propery](#the-lenght-property)
   - [The .push Method](#the-push-method)
   - [The .pop Method](#the-pop-method)
   - [More Array Methods](#more-array-methods)
- [Arrays and Functions](#arrays-and-functions)
   - [Nested Arrays](#nested-arrays)

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
### Scope benefits
Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.

Tightly scoping your variables will greatly improve your code in several ways:
- It will make your code more legible since the blocks will organize your code into discrete sections.
- It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
- It’s easier to maintain your code, since your code will be modular.
- It will save memory in your code because it will cease to exist after the block finishes running.

### Scope recap
- **Scope** refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
- **Blocks** are statements that exist within curly braces {}.
- **Global scope** refers to the context within which variables are accessible to every part of the program.
- **Global variables** are variables that exist within global scope.
Block scope refers to the context within which variables are accessible only within the block they are defined.
- **Local variables** are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
- **Scope pollution** is when too many variables exist in a namespace or variable names are reused.

## [Arrays](https://www.codecademy.com/resources/docs/javascript/arrays)
Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.
```JavaScript
let concepts = ['creating arrays', 'array structures', 'array manipulation'];
```
### Create an array (literal)
```JavaScript
const hobbies = ['one', 'two', 'three'];
console.log(hobbies);
```
### Accessing Elements
Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an array:
```JavaScript
const hobbies = ['one', 'two', 'three'];
console.log(hobbies[2]);
```
#### Update Elements
```JavaScript
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
```
#### The .lenght property
One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings.
```JavaScript
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2

```
#### The .push() Method
One method, `.push()`, allows us to add items to the end of an array.
```JavaScript
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
```
#### The .pop() Method
[.pop()](https://www.codecademy.com/resources/docs/javascript/arrays/pop?page_ref=catalog), removes the last item of an array.
```JavaScript
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
```
- In the example above, calling `.pop()` on the newItemTracker array removed item 2 from the end.
- `.pop()` does not take any arguments, it simply removes the last element of newItemTracker.
- `.pop()` returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
- `.pop()` is a method that mutates the initial array.

#### [More Array Methods](https://www.codecademy.com/resources/docs/javascript/arrays)
Some arrays methods that are available to JavaScript developers include: `.join()`, `.slice()`, `.splice()`, `.shift()`, `.unshift()`, and `.concat()` amongst many others. Using these built-in methods makes it easier to do some common tasks when working with arrays.
```JavaScript
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
//removes the last array element
groceryList.unshift('popcorn');
//adds a new first array element
console.log(groceryList);

console.log(groceryList.slice(1, 4));
//console.log(array.method(first, last+1));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
```

### Arrays and Functions
When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.
```JavaScript
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);

console.log(concept);
```
#### Nested Arrays
Arrays can store other arrays. When an array contains another array it is known as a nested array. 
```JavaScript
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```
#### Arrays recap
- Arrays are lists that store data in JavaScript.
- Arrays are created with brackets [].
- Each item inside of an array is at a numbered position, or index, starting at 0.
- We can access one item in an array using its index, with syntax like: `myArray[0]`.
- We can also change an item in an array using its index, with syntax like `myArray[0] = 'new string';`
- Arrays have a length property, which allows you to see how many items are in an array.
- Arrays have their own methods, including `.push()` and `.pop()`, which add and remove items from an array, respectively.
- Arrays have many methods that perform different tasks, such as `.slice()` and `.shift()`, you can find documentation at the Mozilla Developer Network website.
- Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
- Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
- Arrays mutated inside of a function will keep that change even outside the function.
- Arrays can be nested inside other arrays.
- To access elements in nested arrays chain indices using bracket notation.