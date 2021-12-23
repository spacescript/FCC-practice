function sumAll(arr) {
    var [first, last] = [...arr].sort((a,b) => a - b);
    let sumBetween = 0;
    for(let i = first; i <= last; i++) {
        sumBetween += i;
    }
    return sumBetween;
}
  
const test = sumAll([1, 4]);
console.log(test);