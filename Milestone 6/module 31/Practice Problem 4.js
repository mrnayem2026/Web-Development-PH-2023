let arr1 = [45,85,94,67,26,82];
let arr2 = [50,51,78,6,2,4,8,9,310000]

const findMaxFromArray = (a,b) =>{
    let arr3 = [...a,...b];
    for(let i = 0; i<arr3.length; i++)
    {
     console.log(Math.max(arr3));
    }

}
let result = findMaxFromArray(arr1,arr2);
console.log(result);