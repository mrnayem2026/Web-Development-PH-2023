//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>


var number= parseInt(prompt("Enter any number : "));
var remind = number % 5;

console.log(number + " Number k 5 dara  vag kore vagses roilo : " + remind);