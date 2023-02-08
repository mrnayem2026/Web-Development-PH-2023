//? Description of problem number 3

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



