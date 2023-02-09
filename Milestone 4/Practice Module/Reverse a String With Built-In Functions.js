

let friend1 = "Mostafizur Rahman Nayem";
let friend2 = "MD: Najim";

function reverseString(name1,name2)
{
    if(name1.length > name2.length)
    {
        let revere = name1.split('').reverse().join('');
        console.log(revere);
    } else {
        let revere = name2.split('').reverse().join('');
        console.log(revere);
    }
}
reverseString(friend1,friend2);