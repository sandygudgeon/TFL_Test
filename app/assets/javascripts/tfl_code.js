//Initialise constant
const cstartBalance = 30.00;
//Initialise variables
let _startBalance = Dinero.price({ amount: 30, currency: 'GBP' }),
    _cost = 2.80,
    _endBalance = 0,
    _traveType = "Bus",
    _startStation = "",
    _endStation = "";

//Show start/end balance & cost

_startBalance=cstatyBalance;
document.getElementById("startbalance").innerHTML = _startBalance
document.getElementById("cost").innerHTML = _cost
document.getElementById("endbalance").innerHTML = _endBalance
