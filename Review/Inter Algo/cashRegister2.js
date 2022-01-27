function checkCashRegister(price, cash, cid) {
    // var counters = {Penny: cid[0][1] / .01, Nickel: Math.round( cid[1][1] / .05 ), Dime: cid[2][1] / .1, Quarter: cid[3][1] / .25, Dollar: cid[4][1] / 1, FiveDollar: cid[5][1] / 5, TenDollar: cid[6][1] / 10, TwentyDollar: cid[7][1] / 20, HundredDollar: cid[8][1] / 100};

    var initialCounters = [cid[0][1] / .01, Math.round( cid[1][1] / .05 ), cid[2][1] / .1, cid[3][1] / .25, cid[4][1] / 1, cid[5][1] / 5, cid[6][1] / 10, cid[7][1] / 20, cid[8][1] / 100];

    var counters = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    // var counters = initialCounters;
    var changeOwed = cash - price;
    

    function payout(digit) {
        if(digit >= 100) {
            counters[8] += 1;
            digit -= 100;
            payout(digit);
        } else if (digit >= 20) {
            counters[7] += 1;
            digit -= 20;
            payout(digit);
        } else if (digit >= 10) {
            counters[6] += 1;
            digit -= 10;
            payout(digit);
        } else if (digit >= 5) {
            counters[5] += 1;
            digit -= 5;
            payout(digit);
        } else if (digit >= 1) {
            counters[4] += 1;
            digit -= 1;
            payout(digit);
        } else if (digit >= .25) {
            counters[3] += 1;
            digit -= .25;
            payout(digit);
        } else if (digit >= .10) {
            counters[2] += 1;
            digit -= .10;
            payout(digit);
        } else if (digit >= .05) {
            counters[1] += 1;
            digit -= .05;
            payout(digit);
        } else if (digit >= .01) {
            counters[0] += 1;
            digit -= .01;
            payout(digit);
        }
    }

    payout(changeOwed);

    if(counters.every(x => x >= 0) == false) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    } 
    // else if (counters.every(x => x === 0)) {
        
    // }

    // var difference = counters.map(function(x){
    //     return counters[x] === initialCounters[x];
    // });

    let difference = [];

    for(let i = 0; i < counters.length; i++) {
        if(counters[i] != 0) {
            difference.push([i, counters[i]]);
        }
    }

    for(let i = 0; i < difference.length; i++) {
        
    }

    // var myCid = [["PENNY", ( counters.Penny * .01 )], ["NICKEL", ( counters.Nickel * .05 )], ["DIME", ( counters.Dime * .10 )], ["QUARTER", ( counters.Quarter * .25 )], ["ONE", ( counters.Dollar * 1 )], ["FIVE", ( counters.FiveDollar * 5 )], ["TEN", ( counters.TenDollar * 10 )], ["TWENTY", ( counters.TwentyDollar * 20 )], ["ONE HUNDRED", ( counters.HundredDollar * 100 )]];

    // Notes: Use every() on counters to check if every counter = 0 for the "CLOSED" result. Otherwise, check to see if any of the values are negative. If any of them are, return the "INSUFFICIENT" result. Otherwise, return myCid with altered values.

    // return initialCounters;
    // return counters;
    return difference;
}
  
const test = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(test);