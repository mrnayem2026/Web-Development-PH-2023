const arr = [1,20,-10,30,40,1000000,-50,78,90,-62, 63,64,-65,66];
const positiveArr = [];


console.log("Main Array : ");
for(let i = 0; i< arr.length; i++)
{
    console.log(arr[i]);
}


for(let i = 0; i< arr.length; i++)
{
    if(arr[i] > 0)
    {
        positiveArr.push(arr[i]);
    } else {
        break;
        // continue;
    }
}

console.log("\n");

console.log("Return Positive Number within arr array ");
for(let i = 0; i<positiveArr.length; i++)
{
    console.log(positiveArr[i]);
}