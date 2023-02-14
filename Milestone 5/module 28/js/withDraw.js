/*

! Step for deposit.js

 Step no : 1 
=======>

"withDraw" button k dorte hobe. 

Step no : 2 
=======>

2:- "withDrawAmount" er input tar number ta k  nite hobe .
2.1:- Tarpor "withDrawAmount" k parseFloat korte hobe . 

Step no : 3 
=======>

3 :- Uprer "WithDraw" er 00 number  k dorte hobe . 
3.1 :- seta k  parseFloat korte hobe . 
3.2 :- Tarpor Step  2.1:- number  er sate  step 3.1 Number jog korte hobe . 
3.3 :- Jog kore ta abar 'WithDraw' er 00 number a abar assign korte hobe . 

3.4 :- Blance k dorte  hobe . 
3.5 :- Blance er sathe 'Your withDraw amount' ta ke biog korte hobe.
3.6 :- Tarpor biugfol  aber Blance er 00 number a abar assign korte hobe . 
3.7 :- Sorbo sess Amount er input ta k clear korte hobe 

*/

// Setup Strat 

//? Step no :1:- "withDraw" button k dorte hobe. 
document.getElementById('withDraw').addEventListener('click', function(){
    //? Step no :2:- "withDrawAmount" er input teke number ta nite hobe .
    //? Step no :2.1:- Tarpor "withDrawAmount" k parseFloat korte hobe . 
    const withDrawAmount = parseFloat(document.getElementById('withDrawAmount').value);
    //? Step no :3 :- Uprer "WithDraw" er 00 number  k dorte hobe . 
    //? Step no :3.1 :- seta k  parseFloat korte hobe . 
    const withDrawBlance = parseFloat(document.getElementById('withDrawBlance').innerText)
    //? Step no :3.2 :- Tarpor Step  2.1:- number  er sate  step 3.1 Number jog korte hobe . 
    const sum_Of_withDrawAmount_And_withDrawBlance = withDrawBlance + withDrawAmount;
    //? Step no :3.3 :- Jog kore ta abar 'withDrawBlance' er 00 number a abar assign korte hobe . 
    document.getElementById('withDrawBlance').innerText = sum_Of_withDrawAmount_And_withDrawBlance;
    //? Step no :3.4 :- Blance k dorte  hobe . 
    const my_Total_Blance = parseFloat(document.getElementById('myBlance').innerText);
    //? Step no :3.5 :- Blance er sathe 'Your withDraw amount' ta ke biog korte hobe.
    const sub_Of_my_Total_Blance_with_withDrawAmount = my_Total_Blance - withDrawAmount;
    //? Step no :3.6 :- Tarpor biugfol  aber Blance er 00 number a abar assign korte hobe . 
    document.getElementById('myBlance').innerText = sub_Of_my_Total_Blance_with_withDrawAmount;
    


    //? Step no :3.7 :- Sorbo sess "withDrawAmount" er input ta k clear korte hobe 
    document.getElementById('withDrawAmount').value = '';
 
})