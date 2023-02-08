//? Description of problem number 1

//! The work done in this function mindGame() is, a number is sent as a parameter to this function, then it multiplies 3 with that number, then adds 10, then divides by 2, then subtracts 5, which is the output. It must be returned.

function mindGame(number) {
    if (typeof number === 'number' && number >= 0) {
        let process = (((3 * number) + 10) / 2) - 5;
        return process;
    } else {
        return 'Plese give me valid and positive number ';
    }
}

