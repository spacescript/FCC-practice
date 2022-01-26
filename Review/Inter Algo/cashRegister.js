function checkCashRegister(price, cash, cid) {
    var currency = {Penny: .01, Nickel: .05, Dime: .1, Quarter: .25, Dollar: 1, FiveDollar: 5, TenDollar: 10, TwentyDollar: 20, HundredDollar: 100};
    var changeOwed = cash - price;

    function

    // let change;
    return changeOwed;
}
  
const test = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(test);