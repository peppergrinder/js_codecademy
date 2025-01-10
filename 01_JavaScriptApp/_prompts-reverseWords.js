// This is from this tutorial "Run and debug JavaScript applications with VS Code" on : https://youtu.be/z2EsUIJKk6o?si=kiKyveOqSrrs84m9
const prompts = require('prompts');

function reverse(value) {
    const valueArray = value.split('');
    return valueArray.reverse().join('');
}

async function main() {
    const result = await prompts({
        type: 'text',
        name: 'value',
        message: 'Enter a string to reverse'
    });
    console.log(reverse(result.value));
}

main();