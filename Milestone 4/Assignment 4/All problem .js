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


//? Description of problem number 2

//! evenodd() is what is checked in this function, and whether a string is even or odd. If it is even, it will return even, otherwise it will return odd.

function evenOdd(giveMeAnyWordOrSentenc) {
    if (giveMeAnyWordOrSentenc.length % 2 == 0) {
        return 'even';
    } else if (giveMeAnyWordOrSentenc.length % 2 == 1){
        return 'odd';
    } else {
        return 'Please give me valid string'
    }
}


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

//? Description of problem number 4

// findingBadData(). This function will take an array as input. The array will contain any number of numbers. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero).

// We have to calculate and return as many negative numbers as we get in the array.

let myFriendAge = [20, 10, 50, -50, 60, -66, -22];

function findingBadData(giveArray) {
    if (typeof giveArray === 'object') {
        let badDate = 0;
        for (let j = 0; j < giveArray.length; j++) {
            if (giveArray[j] < 0) {
                badDate++;
            }
        }
        return badDate;
    } else {
        return 'Please give me an array of data';
    }
}


//? Description of problem number 5
// gemsToDiamond(). This function takes three numbers as input.
// Multiply 21 with the first number. 32 times with the second number.
// 43 should be multiplied with the third number. After multiplying, assign the variable totalDiamond to this variable.
// Then, if totalDiamond is greater than or equal to 2000 then
// Subtracted 2000 with totalDiamond and returned the subtraction.

// And if it is small then I have returned this variable totalDiamond.


function gemsToDiamond(number1, number2, number3) {
    if (typeof number1 === 'number' && typeof number2 === 'number' && typeof number3 === 'number') {
        let firstFriend = number1 * 21;
        let secondFriend = number2 * 32;
        let thirdFriend = number3 * 43;

        let totalDiamond = firstFriend + secondFriend + thirdFriend;
        if (totalDiamond >= 2000) {
            return totalDiamond - 2000;
        } else {
            return totalDiamond;
        }
    } else {
        return 'Plese give valid number';
    }
}





