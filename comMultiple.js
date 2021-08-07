function smallestCommons(arr) {
    const ordered = arr.sort(function(a, b) {return a - b;});
    const smallBoi = ordered[0];
    const bigBoi = ordered[1];
    const numberDivisors = bigBoi - smallBoi + 1;

    let upperBound = 1;
    for (let i = smallBoi; i <= bigBoi; i++) {
        upperBound *= i;
    }

    for (let multiple = bigBoi; multiple <= upperBound; multiple += bigBoi) {
        let divisorCount = 0;
        for(let i = smallBoi; i <= bigBoi; i++) {
            if(multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount == numberDivisors) {
            return multiple;
        }
    }
}
  
  
var test = smallestCommons([1,5]);
console.log(test);