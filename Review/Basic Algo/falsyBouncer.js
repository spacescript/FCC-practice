function bouncer(arr) {
    var answer = [];
    arr.map(function(x) {
        if (Boolean(x) == true) {
            answer.push(x);
        }
    })
    return answer;
}
  
const test = bouncer([7, "ate", "", false, 9]);
console.log(test);