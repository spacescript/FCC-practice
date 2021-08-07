function dropElements(arr, func) {
    return arr;
}
  
var test = dropElements([1, 2, 3], function(n) {return n < 3; });

console.log(test);