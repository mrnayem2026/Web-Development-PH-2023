/*

! Step for deposit.js

 Step no : 1 
=======>

Deposite button k dorte hobe. 

Step no : 2 
=======>

2:- amount er input teke number ta nite hobe .
2.1:- number  ta k parseFloat korte hobe . 

Step no : 3 
=======>

3 :- Uprer Your deposit er 00 number  k dorte hobe . 
3.1 :- seta k  parseFloat korte hobe . 
3.2 :- Tarpor Step  2.1:- number  er sate  step 3.1 Number jog korte hobe . 
3.3 :- Jog kore ta abar Your deposit er 00 number a abar assign korte hobe . 
3.4 :- Blance k dorte  hobe . 
3.5 :- Blance k dore take parseFloat a covert korte hobe . 
3.6 :- Tarpor Blance er sathe 'deposit_Amount' k jog korte hobe  . 
3.7 :-  jog kora hea gele ta aber Blance er 00 number a abar assign korte hobe . 
3.8 :-  Sorbo sess Amount er input ta k clear korte hobe .AbortController

*/

//! Step no : 1 :> Deposite button k dorte hobe. 
document.getElementById('deposit-btn').addEventListener('click',function(){
   //! Step no : 2 :> amount er input teke number ta nite hobe . 
   //! Step no : 2.1:- number  ta k parseFloat korte hobe .  . 
  const  deposit_Amount = parseFloat(document.getElementById('depositAmount').value) ;
  //! Step no : 3 :- Uprer Your deposit er 00 number  k dorte hobe . 
  //! Step no :3.1 :- seta k  parseFloat korte hobe . 
  const your_Deposite = parseFloat(document.getElementById('yourDeposite').innerText);
  //! Step no :3.2 :- Tarpor Step  2.1:- number  er sate  step 3.1 Number jog korte hobe . 
  const courentDepo = your_Deposite + deposit_Amount;
  //! Step no : 3.3 :- Jog kore ta abar Your deposit er 00 number a abar assign korte hobe .
  document.getElementById('yourDeposite').innerText = courentDepo;
  //! Step no :3.4 :- Blance k dorte  hobe . 
  //! Step no :3.5 :- Blance k dore take parseFloat a covert korte hobe . 
  const my_Blance = parseFloat(document.getElementById('myBlance').innerText);
  //! Step no : 3.6 :- Tarpor Blance er sathe 'deposit_Amount' k jog korte hobe  . 
  const deposit_AmountJogmy_Blance = deposit_Amount + my_Blance;
  
  //! Step no : 3.7 :-  jog kora hea gele ta aber Blance er 00 number a abar assign korte hobe . 
  document.getElementById('myBlance').innerText = deposit_AmountJogmy_Blance;
  //! Step no :3.4 :-  Sorbo sess Amount er input ta k clear korte hobe .AbortController
  document.getElementById('depositAmount').value = '';

})
