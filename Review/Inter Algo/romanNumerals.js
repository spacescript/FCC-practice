function convertToRoman(num) {
    // First Plan:
    // 1) Make counters for each denomination to be counted
        // A) Store in Object?
    // 2) Recursive solution?
    // 3) Set up a switch function to check for subtractive notation?
    // 4) Use an if function to determine if an M can be pulled out of the number
        // A) Subtract out the M, and increase counter
        // B) Check to see if the next lowest denomination can be used for a "less than" numeral
    // --> Recurse, repeat M's, move down to C's

    var counters = {ones: 0, fours: 0, fives: 0, nines: 0, tens: 0, forties: 0, fifties: 0, nineties: 0, hundreds: 0, fourHundreds: 0, fiveHundreds: 0, nineHundreds: 0, thousands: 0};
    var answer = [];

    function itemizer(digit) {
        if(digit >= 1000) {
            counters.thousands += 1;
            digit -= 1000;
            itemizer(digit);
        } else if (digit >= 900) {
            counters.nineHundreds += 1;
            digit -= 900;
            itemizer(digit);
        } else if (digit >= 500) {
            counters.fiveHundreds += 1;
            digit -= 500;
            itemizer(digit);
        } else if (digit >= 400) {
            counters.fourHundreds += 1;
            digit -= 400;
            itemizer(digit);
        } else if (digit >= 100) {
            counters.hundreds += 1;
            digit -= 100;
            itemizer(digit);
        } else if (digit >= 90) {
            counters.nineties += 1;
            digit -= 90;
            itemizer(digit);
        } else if (digit >= 50) {
            counters.fifties += 1;
            digit -= 50;
            itemizer(digit);
        } else if (digit >= 40) {
            counters.forties += 1;
            digit -= 40;
            itemizer(digit);
        } else if (digit >= 10) {
            counters.tens += 1;
            digit -= 10;
            itemizer(digit);
        } else if (digit >= 9) {
            counters.nines += 1;
            digit -= 9;
            itemizer(digit);
        } else if (digit >= 5) {
            counters.fives += 1;
            digit -= 5;
            itemizer(digit);
        } else if (digit >= 4) {
            counters.fours += 1;
            digit -= 4;
            itemizer(digit);
        } else if (digit >= 1) {
            counters.ones += 1;
            digit -= 1;
            itemizer(digit);
        }
    }

    itemizer(num);

    function pusher() {
        if (counters.thousands >= 1) {
            answer.push('M');
            counters.thousands -= 1;
            pusher();
        } else if (counters.nineHundreds >= 1) {
            answer.push('CM');
            counters.nineHundreds -= 1;
            pusher();
        } else if (counters.fiveHundreds >= 1) {
            answer.push('D');
            counters.fiveHundreds -= 1;
            pusher();
        } else if (counters.fourHundreds >= 1) {
            answer.push('CD');
            counters.fourHundreds -= 1;
            pusher();
        } else if (counters.hundreds >= 1) {
            answer.push('C');
            counters.hundreds -= 1;
            pusher();
        } else if (counters.nineties >= 1) {
            answer.push('XC');
            counters.nineties -= 1;
            pusher();
        } else if (counters.fifties >= 1) {
            answer.push('L');
            counters.fifties -= 1;
            pusher();
        } else if (counters.forties >= 1) {
            answer.push('XL');
            counters.forties -= 1;
            pusher();
        } else if (counters.tens >= 1) {
            answer.push('X');
            counters.tens -= 1;
            pusher();
        } else if (counters.nines >= 1) {
            answer.push('IX');
            counters.nines -= 1;
            pusher();
        } else if (counters.fives >= 1) {
            answer.push('V');
            counters.fives -= 1;
            pusher();
        } else if (counters.fours >= 1) {
            answer.push('IV');
            counters.fours -= 1;
            pusher();
        } else if (counters.ones >= 1) {
            answer.push('I');
            counters.ones -= 1;
            pusher();
        }
    }

    pusher();

    return answer.join('');
}
   
const test = convertToRoman(39);
console.log(test);