//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>

let num = parseInt(prompt("Enter any number (As much you want to even number ) : "))

for(let i=2; i<=num; i+=2)
{
    console.log(i);
}