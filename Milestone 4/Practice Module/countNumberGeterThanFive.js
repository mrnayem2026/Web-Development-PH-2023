const arr = [1,-50,910,2,3,5,9,10,50,60,]
let count = 0;

function countNumber(arra)
{
    for(let i = 0; i<arra.length; i++)
    {
        if(arra[i]  > 5)
        {
            count++;
        }
    }
    console.log(count);
}
countNumber(arr);