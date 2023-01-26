//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>

var mathMraks = parseFloat(prompt("Enter your Math Marks : "));
var biologyMarks = parseFloat(prompt("Enter your Biology Mraks : "));
var chemisryMarks = parseFloat(prompt("Enter your Chemistry Marks : "));
var physicsMarks =  parseFloat(prompt("Enter your  Physics Marks : "))
var banglaMarks = parseFloat(prompt("Enter your Bangla Marks : "));

var totalMarks = mathMraks+biologyMarks+chemisryMarks+banglaMarks+physicsMarks;
var average = totalMarks / 5;

var averageMarks = average.toFixed(2);
console.log("Average Marks : " + parseFloat(averageMarks));
console.log("Data type : " + typeof averageMarks);