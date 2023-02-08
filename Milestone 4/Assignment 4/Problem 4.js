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
