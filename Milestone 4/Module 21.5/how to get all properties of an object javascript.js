// Simple solution 

const myDesk = {
    table : 1,
    cumputer : true,
    book : ["JavaScript by Junaed vai","Dayri1"],
    owenr : 'Mostafizur Rhman nayem'
}
//!  Jodi akta object er sob property er name jante cai .

let allProperty = Object.getOwnPropertyNames(myDesk);
console.log("All Property Name ");
console.log(allProperty);

//!  Jodi akta object er sob value jante cai .
console.log("All value in myDesk object ");
let allPropertyValue = Object.values(myDesk);
console.log(allPropertyValue);