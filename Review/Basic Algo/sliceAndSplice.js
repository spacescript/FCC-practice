function frankenSplice(arr1, arr2, n) {
    var franken = arr2.slice(0, arr2.length);
    var edit = franken.splice(n);
    return franken.concat(arr1, edit);
}
  
const test = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(test);