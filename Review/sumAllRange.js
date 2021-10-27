function sumAll(arr) {
    let sumTotal = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
         sumTotal += i;
    }
    return sumTotal;
}
  
const test = sumAll([1, 4]);

console.log(test);