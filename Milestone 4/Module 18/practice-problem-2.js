//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>


//? Grading Pick out 

var marks = parseInt(prompt("Enter your marks : "));

if (80 >= marks && 100 <= marks) {
    console.log("Your Grade A");
} 
else if (60>= marks && 79 <= marks)
{
    console.log("Your Grade B");
}
else if (50 >= marks && 59<=marks)
{
    console.log("Your Grade C");
} else if  (40 >= marks && 49 <= marks)
{
    console.log("Your Grade D");
}
else{
    console.log("Padar po Pada Tui Fail Korco. Bia Korte parbi na .");
}