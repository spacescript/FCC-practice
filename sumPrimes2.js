function sumPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
        if(primes.every((prime) => i % prime !== 0))
            primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}
  
var test = sumPrimes(10);
console.log(test);