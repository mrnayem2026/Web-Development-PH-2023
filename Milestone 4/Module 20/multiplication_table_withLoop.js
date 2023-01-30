//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>

let number = parseInt(prompt('Enter any number (whice you want multiplication table)  :'));

for(let i=1; i<=10; i++)
{
    // multiply with i number 
    result = i * number;
    // display the result 
    console.log(`${number}*${i} : ${result}`);
}