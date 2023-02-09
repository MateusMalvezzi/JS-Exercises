let Price = 180;
let InCash = Price - ((10/100)* Price);
let Installment = (Price/3);

var RoundedInstallment = parseFloat(Installment.toFixed(2));


console.log(`The price is ${Price} reais.`)
console.log(`The price with 10% discount ${InCash} reais.`)
console.log(`The installment price is  ${RoundedInstallment} reais.`)