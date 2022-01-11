function uniteUnique(arr) {
    var args = [...arguments];
    var answer = [];
    for(let i = 0; i < args.length; i++) {
        for(let j = 0; j < args[i].length; j++) {
            if(!answer.includes(args[i][j])) {
                answer.push(args[i][j]);
            }
        }
    }
    return answer;
}
  
const test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(test);