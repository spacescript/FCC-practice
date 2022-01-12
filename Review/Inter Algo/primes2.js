function sumPrimes(num) {
    var isPrime = Array(num + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(isPrime[i]) {
            for (let j = i * i; j <= num; j += i)
                isPrime[j] = false;
        }
    }
    return isPrime.reduce(
        (sum, prime, index) => prime ? sum + index : sum, 0
    );
}
  
const test = sumPrimes(10);
console.log(test);