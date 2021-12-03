function chunkArrayInGroups(arr, size) {
    var answer = []
    // answer.push(arr.slice(size));
    // answer.unshift(arr);
    // return answer;
    answer.unshift(arr.slice(size));
    if(arr.length != 0) {
        return chunkArrayInGroups(arr);
        
    }
    return answer;
}
  
const test = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(test);