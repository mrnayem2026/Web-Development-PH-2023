//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>


var num1 = parseInt(prompt("Enter First number : "));
var num2 = parseInt(prompt("Enter Second number : "));
var num3 = parseInt(prompt("Enter Third number : "));

// !xWrong problem solve 
// console.log("All Number : "+num1+" " + num2+ " "+num3);
// console.log("Find Largest Number : ");
// if(num1 > num2 )
// {
//     console.log("First is Largest Number : "+ num1);
// }
// else if (num1 < num2 )
// {
//     console.log("Second is Largest Number : "+ num2);
// } else{
//     console.log("Third is Largest Number : "+ num3);
// }

// !xWrong problem solve 
console.log("All Number : "+num1+" " + num2+ " "+num3);
console.log("Find Largest Number : ");
if(num1 > num2 )
{
    console.log("First is Largest Number : "+ num1);
}
else if (num1 < num2 )
{
    console.log("Second is Largest Number : "+ num2);
} else{
    console.log("Third is Largest Number : "+ num3);
}