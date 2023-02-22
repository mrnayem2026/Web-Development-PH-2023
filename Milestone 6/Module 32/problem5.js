const pepole= [
    {
        name : 'Rahim',
        age : 20
    },
    {
        name : 'Karim',
        age : 15
    },
    {
        name : 'Tarim',
        age : 22
    },

]

const sumOfAge = pepole.reduce((total,num) => total + num.age ,0);
console.log(sumOfAge);

