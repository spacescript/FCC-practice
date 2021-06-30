function sumAll(arr) {
    const ordered = arr.sort(function(a,b) {return a-b});
    const ranged = Array(ordered[1] - ordered[0] + 1).fill().map((_, idx) => ordered[0] + idx);
    return ranged.reduce((a, b) => a + b, 0);
}
  
console.log(sumAll([1, 4]));