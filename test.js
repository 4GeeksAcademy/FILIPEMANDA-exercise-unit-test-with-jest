// Import the function sum from the app.js file
const { 
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
} = require('./app.js');

// Start your first test
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One doller should be 1.07 yen", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    const euro = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


// const fromDollarToYen = (valueInEuro) => {
//     let valueInDollar = valueInEuro *oneEuroIs['USD'];
//     return valueInDollar;
// }
// const fromEuroToDollar = (valueInEuro) => {
//     let valueInDollar = oneEuroIs['USD'];
//     return valueInDollar;
// }
// const fromYenToPound = (yenAmount) => {
//     let euroFomYen = yenAmount / oneEuroIs['JPY'];
//     return euroFomYen * oneEuroIs['GBP'];
// }
// // 

