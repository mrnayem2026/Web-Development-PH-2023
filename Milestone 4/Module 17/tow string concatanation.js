//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>

var sentence1 = prompt("Enter meaningful senteance1 : ");
var sentence2 = prompt("Enter meaningful senteance2 : ");
var mengingFulSentence = sentence1+ ' ' + sentence2;

console.log(mengingFulSentence);