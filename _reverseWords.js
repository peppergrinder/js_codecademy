// This is from this tutorial "Run and debug JavaScript applications with VS Code" on : https://youtu.be/z2EsUIJKk6o?si=kiKyveOqSrrs84m9
// See advanced version in 01_JavaScriptApp/_prompts-reverseWords.js

function reverse(value) {
    const valueArray = value.split('');
    return valueArray.reverse().join('');
}

console.log(reverse('Hello World')); // dlroW olleH
