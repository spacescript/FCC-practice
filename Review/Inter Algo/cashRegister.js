function checkCashRegister(price, cash, cid) {
    // var counters = {Penny: cid[0][1] / .01, Nickel: Math.round( cid[1][1] / .05 ), Dime: cid[2][1] / .1, Quarter: cid[3][1] / .25, Dollar: cid[4][1] / 1, FiveDollar: cid[5][1] / 5, TenDollar: cid[6][1] / 10, TwentyDollar: cid[7][1] / 20, HundredDollar: cid[8][1] / 100};

    var initialCounters = [cid[0][1] / .01, Math.round( cid[1][1] / .05 ), cid[2][1] / .1, cid[3][1] / .25, cid[4][1] / 1, cid[5][1] / 5, cid[6][1] / 10, cid[7][1] / 20, cid[8][1] / 100];

    var counters = [cid[0][1] / .01, Math.round( cid[1][1] / .05 ), cid[2][1] / .1, cid[3][1] / .25, cid[4][1] / 1, cid[5][1] / 5, cid[6][1] / 10, cid[7][1] / 20, cid[8][1] / 100];

    // var counters = initialCounters;
    var changeOwed = cash - price;
    

    function payout(digit) {
        if(digit >= 100) {
            counters[8] -= 1;
            digit -= 100;
            payout(digit);
        } else if (digit >= 20) {
            counters[7] -= 1;
            digit -= 20;
            payout(digit);
        } else if (digit >= 10) {
            counters[6] -= 1;
            digit -= 10;
            payout(digit);
        } else if (digit >= 5) {
            counters[5] -= 1;
            digit -= 5;
            payout(digit);
        } else if (digit >= 1) {
            counters[4] -= 1;
            digit -= 1;
            payout(digit);
        } else if (digit >= .25) {
            counters[3] -= 1;
            digit -= .25;
            payout(digit);
        } else if (digit >= .10) {
            counters[2] -= 1;
            digit -= .10;
            payout(digit);
        } else if (digit >= .05) {
            counters[1] -= 1;
            digit -= .05;
            payout(digit);
        } else if (digit >= .01) {
            counters[0] -= 1;
            digit -= .01;
            payout(digit);
        }
    }

    payout(changeOwed);

    // var difference = counters.map(function(x){
    //     return counters[x] === initialCounters[x];
    // });

    // var myCid = [];

    let difference = [];
    var cidKey = [.01, .05, .10, .25, 1, 5, 10, 20, 100];
    var change = [];

    for(let i = 0; i < counters.length; i++) {
        if(counters[i] != initialCounters[i]) {
            difference.push([i, ( initialCounters[i] - counters[i] )]);
        }
    }

    // for(let i = 0; i < difference.length; i++) {
    //     myCid.push(cid[(difference[i][0])][1] - ( difference[i][1] * cidKey[(difference[i][0])] ));
    // }

    for(let i = 0; i < difference.length; i++) {
        change.push([cid[difference[i][0]][0] , cidKey[difference[i][0]] * difference[i][1]]);
    }

    if(counters.every(x => x >= 0) == false) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    } 

    if (counters.every(x => x === 0)) {
        return {status: "CLOSED", change: [...change]}
    } else {
        return {status: "OPEN", change: [...change]}
    }


    // Notes: Use every() on counters to check if every counter = 0 for the "CLOSED" result. Otherwise, check to see if any of the values are negative. If any of them are, return the "INSUFFICIENT" result. Otherwise, return myCid with altered values.

    // return initialCounters;
    return counters;
    // return cidKey[difference[0]];
    // return change;
    // return difference[0];
    // return cid[(difference[0][0])][1];
    // return difference[0][1] * cidKey[difference[0][0]]
}
  
const test = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(test);