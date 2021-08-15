// Initialise constant
const cstartBalance = 30.00;
//Initialise variables
let _endBalance = 27.20;
let _traveType = "Bus";
let _startStation = "";
let _endStation = "";

//Show start/end balance & cost
_startBalance = cstartBalance;
_endBalance = _startBalance - _cost
// import currency = require("currency.js");
// const UKP = value => currency(value, { symbol: '£', decimal: '.', separator: ',' });

//create number formatter
let _formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'UKP'
});

let _formatted_startbalance = _formatter.format(_startBalance);
let _formatted_cost = _formatter.format(_cost);
let _formatted_endbalance = _formatter.format(_endBalance);



