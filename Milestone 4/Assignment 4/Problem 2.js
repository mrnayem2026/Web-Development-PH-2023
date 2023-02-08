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


