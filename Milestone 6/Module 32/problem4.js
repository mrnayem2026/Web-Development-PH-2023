const numbers = [1, 9,17,22];

const sub = numbers.reduce((total,num )=> {
    console.log(total,num);
    return total + num
});
console.log(sub);