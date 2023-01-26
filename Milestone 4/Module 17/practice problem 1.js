// Take Input user 
const prompt = require("prompt-sync")();

var momGiveMoney =parseInt(prompt("Mom Give me Money : "));
var orangesPrice = parseInt(prompt("Oranges Price : "));
var applePrice = parseInt(prompt("Apple Price : "));

var totalPrice = orangesPrice + applePrice;
var shopkeeperRakce = totalPrice;
var shopkeeperReturnTaka = momGiveMoney - totalPrice;

console.log("Mom Give me taka : " + momGiveMoney);
console.log("Oranges Price : " + orangesPrice);
console.log("Apple Price : " + applePrice);
console.log("Sopkeeper Taka Rakce : " + shopkeeperRakce);
console.log("Sopkeeper Taka Ferot Dice : " + shopkeeperReturnTaka);

// Default set variable by programmer

// var momGiveMoney = 1000;
// var orangesPrice = 400;
// var applePrice = 300;

// var totalPrice = orangesPrice + applePrice;

// var shopkeeperReturnTaka = momGiveMoney - totalPrice;

// console.log("Mom Give me money " + momGiveMoney + " Oranges Price : " + orangesPrice + " Apple Price : " + applePrice + " Shopkeeper Return me the take : " + shopkeeperReturnTaka);