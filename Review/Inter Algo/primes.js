function sumPrimes(num) {
    var pool = Array.from(Array(num).keys()), 
        primes = [],
        sieve = [2,3,5,7];
    
    for(let i = 0; i < sieve.length; i++) {
        var temp = pool.filter((x, y) => x % sieve[i] != 0 && x != sieve[i]);
        primes.push(...temp);
    }
    // var temp = pool.filter(x => x%2 != 0);

    var answer = new Set(primes);
    
    return answer;
}
  
const test = sumPrimes(20);
console.log(test);