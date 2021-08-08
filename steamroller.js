function steamrollArray(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            answer.push(...arr[i])
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}
  
var test = steamrollArray([1, [2], [3, [[4]]]]);
console.log(test);