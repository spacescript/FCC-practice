function dropElements(arr, func) {
    let originalLength = arr.length;
    for(let i = 0; i < originalLength; i++) {
        if(func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}
  
// var test = dropElements([1, 2, 3], function(n) {return n < 3; });
var test = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});

console.log(test);