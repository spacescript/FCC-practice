function destroyer(arr) {
    var toRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !toRemove.includes(val);
    });
}
  
const test = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(test);