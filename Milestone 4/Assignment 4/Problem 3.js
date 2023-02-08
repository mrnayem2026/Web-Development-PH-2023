//? Description of problem number 3

//! The “isLGSeven()” function takes a number as input. Subtract that number by 7.
// If the minus is less than 7 then it will return.
// And if it is big then it doubles the number taken as input
// Will return.

function isLGSeven(number) {
    if (typeof number === 'number') {
        let sub = number - 7;
        if (sub >= 7) {
            return number * 2;
        } else {
            return sub;
        }
    } else {
        return 'give me a number';
    }
}

