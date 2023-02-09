// Reverse a String With a Decrementing For Loop 

let friend1 = "Mostafizur Rahman Nayem";
let friend2 = "MD: Najim";

function reverseName(name1,name2)
{

    if(name1.length > name2.length)
    {
        let reverse = [];
        for(let i = friend1.length - 1 ; i>= 0; i--)
        {
            reverse.push(name1[i]);
        }
        let rev = reverse.join('');
        console.log(rev);
    } else {
        let reverse = [];
        for(let i = name2.length - 1 ; i>=0 ; i--)
        {
            reverse.push(name2[i]);
        }
        let rev = reverse.join('');
        console.log(rev);
    }

}
reverseName(friend1,friend2);



