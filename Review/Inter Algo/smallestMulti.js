function smallestCommons(arr) {
    //My plan:
    // 1) Generate Array of all numbers
    // 2) Multiply all numbers together
    // 3) Similar to primes, run the product through a sieve of the more common denominators
        // A) forEach? 
        // B) Check for %'s of each item in pool

    function getNumbers(x) {
        var set = [];
        x.sort((a, b) => a - b);
        for(let i = x[0]; i <= x[1]; i ++) {
            set.unshift(i);
        }
        return set;
    }
    var pool = getNumbers(arr);

    var multiple = pool.reduce((a, b) => a * b);

    function recursingDivide(pool, multiple) {
        if((pool.every(x => multiple % x == 0)) === true) {
            return multiple = (multiple / pool[0]);
        }
        // recursingDivide(pool, multiple);
        return multiple;
    }

    // recursingDivide(pool, multiple);

    // for(let i = 0; i < pool.length; i++) {
    //     if (pool[i] < 2){
    //         i++;
    //         console.log("Increasing pool to " + pool[i])
    //     } else if (multiple % pool[i] == 0) {
    //         return multiple /= pool[i];
    //     }
    //     // return multiple;
    // }

    // var answer = multiple.forEach(function(v, i, a) {
    //     a[i] = 
    // });

    return multiple / pool[0];
    // return pool.every(x => multiple % x == 0);
    // return pool[0];
}
  
const test = smallestCommons([1,5]);
console.log(test);