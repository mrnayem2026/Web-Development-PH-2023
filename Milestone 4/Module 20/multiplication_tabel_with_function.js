//! Prompt-sync file import for promt function <Start>
const prompt = require("prompt-sync")();
//! Prompt-sync file import for promt function <End>


function multiplicatin_table() {
    let number = parseInt(prompt('Enter any number (Whichever you want to multiplication table ) : '));

    for (let i = 1; i <= 10; i++) {
        //? multiplicatin with i number 
        let result = i * number;

        //* display value of i 
        console.log(`${number}*${i} : ${result}`);
    }

}

multiplicatin_table();