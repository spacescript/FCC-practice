function checkCashRegister(price, cash, cid) {
    var counters = {Penny: cid[0][1] / .01, Nickel: Math.round( cid[1][1] / .05 ), Dime: cid[2][1] / .1, Quarter: cid[3][1] / .25, Dollar: cid[4][1] / 1, FiveDollar: cid[5][1] / 5, TenDollar: cid[6][1] / 10, TwentyDollar: cid[7][1] / 20, HundredDollar: cid[8][1] / 100};
    var changeOwed = cash - price;
    // var myCid = cid;

    function payout(digit) {
        if(digit >= 100) {
            counters.HundredDollar += 1;
            digit -= 100;
            payout(digit);
        } else if (digit >= 20) {
            counters.TwentyDollar += 1;
            digit -= 20;
            payout(digit);
        } else if (digit >= 10) {
            counters.TenDollar += 1;
            digit -= 10;
            payout(digit);
        } else if (digit >= 5) {
            counters.FiveDollar += 1;
            digit -= 5;
            payout(digit);
        } else if (digit >= 1) {
            counters.Dollar += 1;
            digit -= 1;
            payout(digit);
        } else if (digit >= .25) {
            counters.Quarter += 1;
            digit -= .25;
            payout(digit);
        } else if (digit >= .10) {
            counters.Dime += 1;
            digit -= .10;
            payout(digit);
        } else if (digit >= .05) {
            counters.Nickel += 1;
            digit -= .05;
            payout(digit);
        } else if (digit >= .01) {
            counters.tens += 1;
            digit -= 10;
            payout(digit);
        } else if (digit >= 9) {
            counters.nines += 1;
            digit -= 9;
            payout(digit);
        } else if (digit >= 5) {
            counters.fives += 1;
            digit -= 5;
            payout(digit);
        } else if (digit >= 4) {
            counters.fours += 1;
            digit -= 4;
            payout(digit);
        } else if (digit >= 1) {
            counters.ones += 1;
            digit -= 1;
            payout(digit);
        }
    }

    // Notes: Use every() on counters to check if every counter = 0 for the "CLOSED" result. Otherwise, check to see if any of the values are negative. If any of them are, return the "INSUFFICIENT" result. Otherwise, return myCid with altered values.

    // payout(changeOwed);

    return counters;
    // return Math.round(2.05 / .05);

    // let change;
    // return changeOwed;
}
  
const test = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(test);

// function payout(digit) {
//     if((digit >= 100) && cid[8][1] >= 100) {
//         myCid[8][1] - 100;
//         digit -= 100;
//         payout(digit);
//     } else if (digit >= 20) {
//         myCid[7][1] - 20;
//         digit -= 20;
//         payout(digit);
//     } else if (digit >= 10) {
//         myCid[6][1] - 10;
//         digit -= 10;
//         payout(digit);
//     } else if (digit >= 5) {
//         myCid[5][1] - 5;
//         digit -= 5;
//         payout(digit);
//     } else if (digit >= 1) {
//         myCid[4][1] - 1;
//         digit -= 1;
//         payout(digit);
//     } else if (digit >= .25) {
//         myCid[3][1] - .25;
//         digit -= .25;
//         payout(digit);
//     } else if (digit >= .10) {
//         myCid[2][1] - .10;
//         digit -= .10;
//         payout(digit);
//     } else if (digit >= .05) {
//         myCid[1][1] - .05;
//         digit -= .05;
//         payout(digit);
//     } else if (digit >= .01) {
//         myCid[0][1] - .01;
//         digit -= .01;
//         payout(digit);
//     }
// }