const sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
   
    const fromDollarToYen = (valueInEuro) => {
        let valueInDollar = valueInEuro *oneEuroIs['USD'];
        return valueInDollar;
    }
    const fromEuroToDollar = (valueInEuro) => {
        let valueInDollar = oneEuroIs['USD'];
        return valueInDollar;
    }
    const fromYenToPound = (yenAmount) => {
        let euroFomYen = yenAmount / oneEuroIs['JPY'];
        return euroFomYen * oneEuroIs['GBP'];
    }
    
   

    module.exports = { 
        fromDollarToYen,
        fromEuroToDollar,
        fromYenToPound,
        
    }






// 1 EUR (Euro) = 1.07 USD (US Dollar)