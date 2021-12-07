function chunkArrayInGroups(arr, size) {
    var answer = [];
    for (let i = 0; i < arr.length; i+= size) {
        answer.push(arr.slice(i, i + size));
    }
    return answer;
}
  
const test = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(test);