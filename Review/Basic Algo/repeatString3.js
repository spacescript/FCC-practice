function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
  
const test = repeatStringNumTimes("abc", 3);
console.log(test);