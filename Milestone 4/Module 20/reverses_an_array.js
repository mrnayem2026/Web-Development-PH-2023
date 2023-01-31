//? using buildin function 

// let num = [1,2,3,4,5];


// console.log("Main Array : ");
// console.log(num);

// let rev = num.reverse();
// console.log("Reversed Array ");
// console.log(rev);

let num = [1,2,3,4,5];
let reversed_array = [];
console.log("Main array : ");
for(var i = 0; i<num.length; i++)
{
    console.log(num[i]);
}

// reversed array 
console.log("Reversed  array : ");
for(var i =num.length; i>=0; i--)
{
    reversed_array.push(num[i]);
    console.log(reversed_array[i]);
}