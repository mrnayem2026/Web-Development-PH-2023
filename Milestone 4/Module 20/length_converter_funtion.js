//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>

function length_conversion()
{
    let kl = parseInt(prompt("Enter Kilometers : "))
    let convert = console.log(kl + " Kilometer  to miles : " + parseFloat(kl)*0.6241 );
    return convert;
}
length_conversion();
