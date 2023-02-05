//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>


function multiplicationTable()
{
    const number = parseInt(prompt("Enter any  number whiceever you want to mulitplication Table : "))

    for(let i = 1; i<=10 ; i++)
    {
        let mulitplication = i * number;
        console.log(`Number ${number} and multiply ${i} . result : ${mulitplication}`);
    }
}
multiplicationTable();