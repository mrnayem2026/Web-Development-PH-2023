//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>


const numb = parseInt(prompt("Enter any number whichever you want to print : "));
let sum = 0;

for(let i = 1; i<=numb; i++)
{
    sum += i;
}
console.log("Sum all number : " + sum);