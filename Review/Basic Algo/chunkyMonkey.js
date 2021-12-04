function chunkArrayInGroups(arr, size) {
    var answer = []
    // answer.push(arr.slice(size));
    // answer.unshift(arr);
    // return answer;
        answer.unshift(arr.splice(size));
    
    if(arr.length <= size) {
        answer.unshift(arr);
    } else if (arr.length > size) {
        answer.unshift(arr.splice(size));
    }
    return answer;
}
  
const test = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(test);