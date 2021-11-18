function repeatStringNumTimes(str, num) {
    var answer = "";
    while(num > 0) {
        answer += str;
        num--;
    }
    return answer;
}
  
const test = repeatStringNumTimes("abc", 3);
console.log(test);