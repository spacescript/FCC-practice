function checkCashRegister(price, cash, cid) {
    var changeOwed = cash - price;
    var counters = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var cashOnHand = [cid[0][1], cid[1][1], cid[2][1], cid[3][1], cid[4][1], cid[5][1], cid[6][1], cid[7][1], cid[8][1]];

    function payout(digit) {
        if(digit >= 100 && cid[8][1] >= 100) {
            counters[8] += 1;
            digit -= 100;
            cid[8][1] -= 100;
            payout(digit);
        } else if (digit >= 20 && cid[7][1] >= 20) {
            counters[7] += 1;
            digit -= 20;
            cid[7][1] -= 20;
            payout(digit);
        } else if (digit >= 10 && cid[6][1] >= 10) {
            counters[6] += 1;
            digit -= 10;
            cid[6][1] -= 10;
            payout(digit);
        } else if (digit >= 5 && cid[5][1] >= 5) {
            counters[5] += 1;
            digit -= 5;
            cid[5][1] -= 5;
            payout(digit);
        } else if (digit >= 1 && cid[4][1] >= 1) {
            counters[4] += 1;
            digit -= 1;
            cid[4][1] -= 1;
            payout(digit);
        } else if (digit >= .25 && cid[3][1] >= .25) {
            counters[3] += 1;
            digit -= .25;
            cid[3][1] -= .25;
            payout(digit);
        } else if (digit >= .10 && cid[2][1] >= .10) {
            counters[2] += 1;
            digit -= .10;
            cid[2][1] -= .10;
            payout(digit);
        } else if (digit >= .05 && cid[1][1] >= .05) {
            counters[1] += 1;
            digit -= .05;
            cid[1][1] -= .05;
            payout(digit);
        } else if (digit > 0 && cid[0][1] > 0) {
            counters[0] += 1;
            digit -= .01;
            cid[0][1] -= .01;
            payout(digit);
        } 
        // else {
        //     return {status: "INSUFFICIENT_FUNDS", change: []}
        // }
    }

    payout(changeOwed);

    var change = [];
    var cidKey = [.01, .05, .10, .25, 1, 5, 10, 20, 100];
    var total = 0;

    for(let i = 0; i < counters.length; i++) {
        if(counters[i] != 0) {
            change.unshift( [ cid[i][0], ( counters[i] * cidKey[i] ) ] );
            cashOnHand[i] -= ( counters[i] * cidKey[i] );
            total += ( counters[i] * cidKey[i] );
        }
    }

    if(total < changeOwed){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }else if(cashOnHand.every(x => x === 0)) {
        return {status: "CLOSED", change: [...change, ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
    } else {
        return {status: "OPEN", change: [...change]};
    }

    // return cid;
    // return counters;
    // return changeOwed;
    // return change;
    // return total;
}
  
const test = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

console.log(test);