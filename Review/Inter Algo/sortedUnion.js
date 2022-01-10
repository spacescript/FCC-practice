function uniteUnique(arr) {
    var fullList = [];
    for(let i = 0; i < arguments.length; i++) {
        fullList.push(...arguments[i]);
    };

    var answer;

    fullList.forEach(function(v, i, a) {
        let counter = 1;
        if(a[i] === v) {
            return answer.push(counter += 1);
        }
    });

    // return Object.getOwnPropertyNames(arr);
    // return fullList;
}
  
const test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(test);