function uniteUnique(arr) {
    var fullList = [];
    for(let i = 0; i < arguments.length; i++) {
        fullList.push(...arguments[i]);
    };
    var answer = [...new Set(fullList)];
    return answer;
}
  
const test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
console.log(test);