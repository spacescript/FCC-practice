function sumPrimes(num) {
    var primeArray = [];

    function isPrime(n) {
        // if (n < 2) return false;
        var q = Math.floor(Math.sqrt(n));
        for(let i = 2; i <= q; i++) {
            if (n % i == 0) {
                return false;
            }
            primeArray.push(n)
        }
    }

    for(let i = 1; i <= num; i++) {
        isPrime(i);
    }

    return primeArray;
}
  
var test = sumPrimes(10);
console.log(test);