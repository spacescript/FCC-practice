function dropElements(arr, func) {
    // var key = arr.filter(func)[0];
    var position = arr.indexOf(arr.filter(func)[0]);

    if(position != -1) {
        return arr.splice(position);
    }
    return [];
}
  
const test = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
console.log(test);