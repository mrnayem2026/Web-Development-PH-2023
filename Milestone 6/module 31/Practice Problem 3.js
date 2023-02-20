let arrOfNumber = [1,2,3,4,5,6,7];

const squareOfArray = (aarry) => {
    let newArrayForSumParray = []
    for(let i =0; i<aarry.length; i++){
        newArrayForSumParray.push(aarry[i]*aarry[i]);
    }

    let sum = 0;
    for(let j = 0; j<newArrayForSumParray.length; j++)
    {
        sum += newArrayForSumParray[j];
    }
    let averageOfSum = sum / newArrayForSumParray.length;
    return averageOfSum;
}


let h=squareOfArray(arrOfNumber);
console.log(h);