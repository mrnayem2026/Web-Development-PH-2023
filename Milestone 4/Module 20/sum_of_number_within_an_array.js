// with out for each 

// let num = [1,2,3];
// var sum = 0;
// for(let i=0; i<num.length; i++)
// {
//     sum += num[i];
//     console.log("Main number : " + num[i]);
// }
// console.log(sum);

// with for each 
let num = [1,2,3];
var sum = 0;
num.forEach( eachNumofWithinArray  => {
    sum +=eachNumofWithinArray;
})
console.log(sum);