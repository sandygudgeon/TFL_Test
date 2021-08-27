// create number formatter
let _startBalance = 30.00;
let _cost = 2.80;
let _endBalance = 27.20;

let _formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'UKP'
});

let _formatted_startBalance = _formatter.format(_startBalance);
let _formatted_cost = _formatter.format(_cost);
let _formatted_endBalance = _formatter.format(_endBalance);



