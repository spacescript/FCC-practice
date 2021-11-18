function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}
  
const test = repeatStringNumTimes("abc", 3);
console.log(test);