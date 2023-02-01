
function convertCtoF(celsius) {
    let fahrenheit = parseFloat(((9/5)*celsius) +  32 ).toFixed(1);
    return fahrenheit;
}
let  result = convertCtoF(37);
console.log("Convert Celsius to Fahrenheit ");
console.log(result);