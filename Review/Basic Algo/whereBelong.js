function getIndexToIns(arr, num) {
    var answer = 0;
    var sorted = arr.sort(function(a, b) {
        return a - b;
    })
    for (let i = 0; i < sorted.length; i++) {
        if (num <= sorted[i] && num > sorted[i - 1]) {
            answer = i;
        } else if (i > sorted.length) {
            answer = i + 1;
        }
    }
    return answer;
}
  
const test = getIndexToIns([2, 5, 10], 15);
console.log(test);