function factorialize(num) {
    if(num === 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}
  
const test = factorialize(5);
console.log(test);