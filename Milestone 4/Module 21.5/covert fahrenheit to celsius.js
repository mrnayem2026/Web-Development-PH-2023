function converFtoC(fahrenheit)
{
    let celsius = parseFloat((fahrenheit - 32 ) / 1.8).toFixed(1);
    return celsius;
}

let fahrenheitToCelsuis = converFtoC(98.6);
console.log("Covert Fahrenheit to celsius ");
console.log(fahrenheitToCelsuis);