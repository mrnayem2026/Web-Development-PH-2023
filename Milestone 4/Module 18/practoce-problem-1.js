var fruits = ['Apple', 'Banna', 'Orange'];
console.log("Main Array : ");
console.log(fruits);

//! Find the index of Banna 
var findBanna = fruits.indexOf('Banna');
console.log("Find the index of Banna :" + findBanna);

//? replace ‘Banana’ with ‘Mango’.
fruits[1] = 'Mango' ;
console.log("And replace ‘Banana’ with ‘Mango’.");
console.log(fruits);

//* Remove ‘Orange’ and add ‘Watermelon’.
console.log("Remove ‘Orange’ and add ‘Watermelon’ : ");
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);

//* Remove ‘Apple’ and add ‘Strobery’.
console.log("Remove ‘Apple’ and add ‘Strobery’ :  ");
fruits.shift();
fruits.unshift("Strobery");
console.log(fruits);
