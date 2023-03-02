// Fetch AllBilonair data form server {Start} 

let URL = 'https://forbes400.onrender.com/api/forbes400/getAllBillionaires';
fetch(URL)
    .then(res => res.json())
    .then(date => displayAllBillonair(date))




const displayAllBillonair = (date) =>  {
   let tableRowContainer = document.getElementById('table-row-container');
   date = date.splice(0,3)
    console.log(date);
}
console.log("Hello  Nayem");
// Fetch AllBilonair data form server {End} 