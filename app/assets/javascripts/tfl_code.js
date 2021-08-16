// Initialise constant
 const cstartBalance = 30.00
// Initialise variables
let _endBalance = 27.20
// let _traveType = "Bus";
// let _startStation = '';
// let _endStation = '';
let _startBalance = 30.00;
let _cost = 2.80;

// Show start/end balance & cost
_startBalance = cstartBalance
_endBalance = _startBalance - _cost
// import currency = require("currency.js");
// const UKP = value => currency(value, { symbol: '£', decimal: '.', separator: ',' });

//  create number formatter
const _formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'UKP'
})

const _formatted_startbalance = _formatter.format(_startBalance)
const _formatted_cost = _formatter.format(_cost)
const _formatted_endbalance = _formatter.format(_endBalance)
