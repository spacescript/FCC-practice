function factorialize(num) {
    let multiple = 1;
    for (let i = 1; i <= num; i++) {
        multiple *= i;
    }
    return multiple;
}
  
const test = factorialize(5);
console.log(test);