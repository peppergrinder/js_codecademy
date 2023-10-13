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
   - [Array recap](#arrays-recap)
- [Loops](#loops)
    - [The For Loop](#the-for-loop)
    - [The While Loop](#the-while-loop)
    - [Do...While Statements](#dowhile-statements)
    - [The 'break' Keyword](#the-break-keyword)
- [Iterators](#iterators)
    - [Higher-Order Functions](#higher-order-functions)
        - ['forEach()` Method](#the-foreach-method)
        - [The `.map()` Method](#the-map-method)
        - [The `.filter()` Method](#the-filter-method)
        - [The `.findIndex()` Method](#the-findindex-method)
        - [The `.reduce()` Method](#the-reduce-method)
    - [Iterator Documentation](#iterator-documentation)
    - [Choose the Right Iterator](#choose-the-right-iterator)
    - [Iterator Review](#iterator-review)
- [Objects](#objects)
    - [Creating Object Literals](#creating-object-literals)
      - [Accessing Properties](#accessing-properties)
      - [Property Assignment](#property-assignment)
    - [Methods](#methods)
    - [Nested Objects](#nested-objects)
    - [Pass By Reference](#pass-by-reference)
    - [Looping Through Objects](#looping-through-objects)
    - [Objects Review](#objects-review)
- [Advanced Objects](#advanced-objects)
    - [The `this` Keyword](#the-this-keyword)
    - [Arrow Functions and this](#arrow-functions-and-this)
    - [Privacy](#privacy)

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
- `===` is/equals
- `!==` is not
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
---
[back to top](#contents)

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
---
[back to top](#contents)

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
---
[back to top](#contents)

## [Variables](https://www.codecademy.com/resources/docs/javascript/variables)
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
---
[back to top](#contents)

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
[.pop()](https://www.codecademy.com/resources/docs/javascript/arrays/pop?page_ref=catalog), removes the last item of an array and returns that element.
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
//removes the first array element
groceryList.unshift('popcorn');
//adds a new first array element
console.log(groceryList);

console.log(groceryList.slice(1, 4));
//returns items from index 1 to 4 (3 values in this case)  ['bananas','coffee beans', 'brown rice']

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta'); //returns the index number of 'pasta'
console.log(pastaIndex);
```
---
[back to top](#contents)

### Arrays and Functions
When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.
```JavaScript
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);
//['arrays', 'can', 'be', 'MUTATED']

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
- Arrays have many methods that perform different tasks, such as `.slice()` and `.shift()`, you can find documentation at the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) website.
- Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
- Variables that contain arrays can be declared with `let` or `const`. Even when declared with `const`, arrays are still mutable. However, a variable declared with `const` cannot be reassigned.
- Arrays mutated inside of a function will keep that change even outside the function.
- Arrays can be nested inside other arrays.
- To access elements in nested arrays chain indices using bracket notation.
---
[back to top](#contents)

## [Loops](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet)
A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

When we need to reuse a task in our code, we often bundle that action in a function. Similarly, when we see that a process has to repeat multiple times in a row, we write a loop. Loops allow us to create efficient code that automates processes to make scalable, manageable programs.

As illustrated in the diagram, loops iterate or repeat an action until a specific condition is met. When the condition is met, the loop stops and the computer moves on to the next part of the program.

### The For Loop
The typical `for` loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.
A for loop contains three expressions separated by `;` inside the parentheses:

1. The initialization defines where to begin the loop by declaring (or referencing) the iterator variable
2. The stopping condition determines when to stop looping (when the expression evaluates to false)
3. The iteration statement updates the iterator each time the loop is completed
```JavaScript
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
// 0 1 2 3
```
Let’s break down the example:

- The initialization is `let counter = 0`, so the loop will start counting at `0`.
- The stopping condition is `counter < 4`, meaning the loop will run as long as the iterator variable, `counter`, is less than `4`.
- The iteration statement is `counter++`. This means after each loop, the value of `counter` will increase by 1. For the first iteration `counter` will equal `0`, for the second iteration counter will equal `1`, and so on.
- The code block is inside of the curly braces, `console.log(counter)`, will execute until the condition evaluates to `false`. The condition will be false when `counter` is greater than or equal to `4` — the point that the condition becomes false is sometimes called **the stop condition**.
This for loop makes it possible to write 0, 1, 2, and 3 programmatically.

### Reverse Loops
A `for` loop can iterate “in reverse” by initializing the loop variable to the starting value, testing for when the variable hits the ending value, and decrementing (subtracting from) the loop variable at each iteration.
```JavaScript
const items = ['apricot', 'banana', 'cherry'];
 
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}
 
// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot
```

### Nested Loops
```JavaScript
const bobsFollowers = ['Hank', 'Herbie', 'Hermann', 'Hofmann']
const tinasFollowers = ['Hermine', 'Hermann', 'Hofmann']

let mutualFollowers = [];
//creates empty array

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers);
// Hermann
// Hofmann
```
```JavaScript
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}
 
/* 
Output:
0-0
0-1
0-2
1-0
1-1
1-2
*/
```
```JavaScript
const dividerLine = '------------------------------';
const students = ['Joe', 'Ann', 'Tom', 'Bert'];
 
console.log(dividerLine);
for (let s = 0; s < students.length; s += 1) {
  console.log('Student: ' + students[s]);
  for (let a = 1; a <= 4; a += 1) {
    console.log(`  Assignment ${a}: _______`);
  }
  console.log(dividerLine);
}
```
A nested for loop is when a for loop runs inside another for loop.
The inner loop will run all its iterations for each iteration of the outer loop.

### The While Loop
The while loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before the loop, and usually, some variable is incremented or altered in the while loop body to determine when the loop should stop.
```JavaScript
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
```
- The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
- We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
- Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo.

In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
```JavaScript
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
// Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.
```
In this example a new random card from array `cards` is taken until a card 'spade' is pulled.

### Do...While Statements
A `do...while` statement says to do a task once and then keep doing it until a specified condition is no longer met.
```JavaScript
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);
```
Note that the `while` and `do...while` loop are different! Unlike the `while` loop, `do...while` will run at least once whether or not the condition evaluates to `true`.
```JavaScript
x = 0
i = 0
 
do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
 
// Prints: 0 1 3 6 10
```

### The `break` keyword
```JavaScript
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');
```
```
Banana.
Banana.
Banana.
Orange you glad I broke out the loop!
```
`break` statements can be especially helpful when we’re looping through large data structures! With breaks, we can add test conditions besides the stopping condition, and exit the loop when they’re met.
---
[back to top](#contents)

## [Iterators](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators/cheatsheet)
### Higher-Order Functions
Higher-order functions are functions that accept other functions as arguments and/or return functions as output.
```JavaScript
//simplified example
const addTwo = num => {
  return num + 2;
}

const higherOrder = (func, val) => {
  let funcCaller = func(val);
  return func(val);
}

console.log(higherOrder(addTwo, 6));
```

```JavaScript
//full example
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  console.log("Value of val " + val);
  console.log("Value of checkA: " + checkA);
  let checkB = func(val);
  return checkA === checkB ? func(val)
  : 'inconsistent results';
}

console.log(checkConsistentOutput(addTwo, 4));
```
- Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.
- We can work with functions the same way we work with any other type of data, including reassigning them to new variables.
- JavaScript functions are first-class [objects](https://www.codecademy.com/resources/docs/javascript/objects), so they have properties and [methods](https://www.codecademy.com/resources/docs/javascript/methods) like any other object.
- Functions can be passed into other functions as parameters.
- A higher-order function is a function that either accepts functions as parameters, returns a function, or both.

### Callback Functions
In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).

Since, in JavaScript, functions are objects, functions can be passed as arguments.
```JavaScript
const isEven = (n) => {
  return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4); 
// Prints: The number 4 is an even number: True.
```

### Iteration Methods
at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.
- [`.forEach()`](#the-foreach-method) is used to execute the same code on every element in an array but does not change the array and returns undefined.
- [`.map()`](#the-map-method) executes the same code on every element in an array and returns a new array with the updated elements.
- [`.filter()`](#the-filter-method) checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
- [`.findIndex()`](#the-findindex-method) returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
- [`.reduce()`](#the-reduce-method) iterates through an array and takes the values of the elements and returns a single value.
- All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

```JavaScript
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
```
#### The `forEach()` Method
`.forEach()` will execute the same code for each element of an array.
[iterator anatomy](/resources/images/iterator_anatomy.svg)

- `groceries.forEach()` calls the forEach method on the groceries array.
- `.forEach()` takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
- `.forEach()` loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
- The return value for `.forEach()` will always be undefined.

Another way to pass a callback for `.forEach()` is to use arrow function syntax.
```JavaScript
groceries.forEach(groceryItem => console.log(groceryItem));
```
We can also define a function beforehand to be used as the callback function.
```JavaScript
function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);
```
#### The `.map()` Method
When `.map()` is called on an array, it takes an argument of a callback function and returns a new array! 
```JavaScript
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
```
- `numbers` is an array of numbers.
- `bigNumbers` will store the return value of calling `.map()` on `numbers`.
- `numbers.map` will iterate through each element in the `numbers` array and pass the element into the callback function.
- `return number * 10` is the code we wish to execute upon each element in the array. This will save each value from the `numbers` array, multiplied by 10, to a new array.

#### The `.filter()` Method
Like `.map()`, `.filter()` returns a new array. However, `.filter()` returns an array of elements after filtering out certain elements from the original array. The callback function for the `.filter()` method should return `true` or `false` depending on the element that is passed to it. The elements that cause the callback function to return `true` are added to the new array. 
```JavaScript
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});
```
- `words` is an array that contains string elements.
- `const shortWords = ` declares a new variable that will store the returned array from invoking `.filter()`.
- The callback function is an arrow function that has a single parameter, word. Each element in the words array will be passed to this function as an argument.
- `word.length < 6;` is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.
```JavaScript
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
```
```JavaScript
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(snum => {
  if (snum < 250) {
    return true;
  }
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(fwrd => {
  return fwrd.length > 7;
});

console.log(smallNumbers);
console.log(longFavoriteWords);
```
#### The `.findIndex()` Method
Calling `.findIndex()` on an array will return the index of the **first** element that evaluates to true in the callback function.
```JavaScript
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(fant => {
  return fant === 'elephant';
})

console.log(foundAnimal); // 7
console.log(animals[7]); // elephant

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log(startsWithS); // 3
console.log('First animal that starts with S: ' + animals[3]); // seal
```
#### The `.reduce()` Method
The `.reduce()` method returns a single value after iterating through the elements of an array, thereby reducing the array.
```JavaScript
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17
```
Here are the values of accumulator and currentValue as we iterate through the numbers array:
| Iteration | `accumulator` | `currentValue` | `return value` |
| :-------- | :------------ | :------------- | :------------- |
| First     | 1             | 2              | 3              |
| Second    | 3             | 4              | 7              |
| Third     | 7             | 10             | 17             |

Now let’s go over the use of `.reduce()` from the example above:

- `numbers` is an array that contains numbers.
- `summedNums` is a variable that stores the returned value of invoking `.reduce()` on numbers.
- `numbers.reduce()` calls the `.reduce()` method on the numbers array and takes in a callback function as argument.
- The callback function has two parameters, `accumulator` and `currentValue`. The value of `accumulator` starts off as the value of the first element in the array and the `currentValue` starts as the second element. To see the value of `accumulator` and `currentValue` change, review the chart above.
- As `.reduce()` iterates through the array, the return value of the callback function becomes the `accumulator` value for the next iteration, `currentValue` takes on the value of the current element in the looping process.

The `.reduce()` method can also take an optional second parameter to set an initial value for `accumulator` (remember, the first argument is the callback function!). For instance:
```JavaScript
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117
```
Updated chart that accounts for the second argument of `100`:
| Iteration | `accumulator` | `currentValue` | `return value` |
| :-------- | :------------ | :------------- | :------------- |
| First     | 100           | 1              | 101            |
| Second    | 101           | 2              | 103            |
| Third     | 103           | 4              | 107            |
| Fouth     | 107           | 10             | 117            |

`.reduce` also works on letters:
```JavaScript
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
  }, "C"); //CODECADEMY
```
---
### [Iterator Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)
```JavaScript
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});

// check if every element has more than 5 characters

console.log(interestingWords.every((word) => {
  return word.length > 5
 } ));

console.log(interestingWords);
```
### Choose the Right Iterator
There are many iteration [methods](https://www.codecademy.com/resources/docs/javascript/methods) you can choose. In addition to learning the correct syntax for the use of iteration methods, it is also important to learn how to choose the correct method for different scenarios.

### Iterator Review
**JavaScript Functions: First-Class Objects**
```JavaScript
//Assign a function to a variable originalFunc
const originalFunc = (num) => { return num + 2 };

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;

//Access the function's name property
newFunc.name; //'originalFunc'

//Return the function's body as a string
newFunc.toString(); //'(num) => { return num + 2 }'

//Add our own isMathFunction property to the function
newFunc.isMathFunction = true;

//Pass the function as an argument
const functionNameLength = (func) => { return func.name.length }; 
functionNameLength(originalFunc); //12

//Return the function
const returnFunc = () => { return newFunc };
returnFunc(); //[Function: originalFunc]
```
JavaScript functions are first-class objects. Therefore:

- They have built-in properties and methods, such as the name property and the .toString() method.
- Properties and methods can be added to them.
- They can be passed as arguments and returned from other functions.
- They can be assigned to variables, array elements, and other objects.

**Functions assigned to Variables**
```JavaScript
let plusFive = (number) => {
  return number + 5;  
};
// f is assigned the value of plusFive
let f = plusFive;

plusFive(3); // 8
// Since f has a function value, it can be invoked. 
f(9); // 14
```
---
[back to top](#contents)

## Objects
[cheatsheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet)
![Objects graph](/resources/images/javascript_object.svg "Objects Anatomy")
### Creating Object Literals
Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:
```JavaScript
let fasterShip = {
  'Fuel Type' : 'Turbo Fuel', // separate with commas
  color: 'silver'
};
```
#### Accessing Properties
![Dot Notation](/resources/images/object-dot-notation.svg "Dot Operator")

Using Dot Notation
```JavaScript
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
```

![Bracket Notation](/resources/images/object-access-bracket.svg "Using Brackets")

Using Bracket Notation

We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.
```JavaScript
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship['Active Mission'];
console.log(propName + ": " + isActive); // Returns 'Active Mission: true'
```

With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:
```JavaScript
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
```
#### Property Assignment
Objects are mutable - 
We can use either dot notation,` .`, or bracket notation, `[]`, and the assignment operator, `=` to add new key-value pairs to an object or change an existing property.
![Property Assignment](/resources/images/object_property_assignment.svg "Property Assignment")

It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
```JavaScript
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
```
You can delete a property from an object with the delete operator.
```JavaScript
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property
delete spaceship['Fuel Type']; // Removes the 'Fuel Type' property
```
### Methods
When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
Don’t forget to separate your methods with **commas** just as you would any other key-value pairs:
```JavaScript
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat() {
    console.log(retreatMessage)
  },  // separate methods with commas
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff();
```
### Nested Objects
In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!
```JavaScript
let spaceship = {
  passengers: [{name: 'Rocketman'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0]; // returns: cookies
let firstPassenger = spaceship.passengers[0]; // returns: { name: 'Rocketman' }
```
### Pass By Reference
Objects are *passed by reference*. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a `const` variable).
```JavaScript
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};
// change Fuel Type
let greenEnergy = objectParam => {
  objectParam['Fuel Type'] = 'avocado oil'
};
// add 'disabled' parameter holding the value 'true'
let remotelyDisable = objectParam => {
  objectParam.disabled = true;
};
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship); // { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }
```
### Looping Through Objects
Loops are programming tools that repeat a block of code until a condition is met. We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) syntax.
```JavaScript
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
/* 
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna 
*/

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}
/* 
Lily: Computer Engineering
Dan: Aerospace Engineering
Clementine: Physics
Shauna: Conservation Science 
*/
```
### Objects Review

- Objects store collections of key-value pairs.
- Each key-value pair is a property—when a property is a function it is known as a method.
- An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
- You can access, add or edit a property within an object by using dot notation or bracket notation.
- We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
- We can navigate complex, nested objects by chaining operators.
- Objects are mutable—we can change their properties even when they’re declared with `const`.
- Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
- We can iterate through objects using the `For...in` syntax.
---
[back to top](#contents)

## Advanced Objects
- how to use the `this` keyword.
- conveying privacy in JavaScript methods.
- defining getters and setters in objects.
- creating factory functions.
- using destructuring techniques.

### The `this` Keyword
```JavaScript
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore
```

```JavaScript
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  }
};

console.log(robot.provideInfo());
```
### Arrow Functions and this
**Avoid using arrow functions when using `this` in a method!**

We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the this keyword in a method then the value of this is the calling object.
Arrow functions inherently bind, or tie, an already defined `this` value to the function itself that is NOT the calling object.

### Privacy
