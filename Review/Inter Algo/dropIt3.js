function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
    // return sliceIndex;
}
  
const test = dropElements([1, 2, 3], function(n) {return n < 3; });
console.log(test);