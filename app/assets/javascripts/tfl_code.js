//Initialise constant
const cstartBalance = 30.00;
//Initialise variables
let _startBalance = 30.00,
    _cost = 2.80,
    _endBalance = 0,
    _traveType = "Bus",
    _startStation = "",
    _endStation = "";

//Show start/end balance & cost

//_startBalance=cstartBalance;

//import currency = require("currency.js");
//const UKP = value => currency(value, { symbol: '£', decimal: '.', separator: ',' });

//create number formatter
let _formatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'UKP'
})



