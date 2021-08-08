function dropElements(arr, func) {
    var set = arr.map(x => func(x));
    var answers = [];
    for(let i = 0; i < set.length; i++) {
        if(set[i] == true) {
            answers.push(arr[i])
        }
    }
    return answers;
}
  
var test = dropElements([1, 2, 3], function(n) {return n < 3; });
// var test = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});

console.log(test);