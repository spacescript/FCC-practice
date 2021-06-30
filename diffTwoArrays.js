function diffArray(arr1, arr2) {
    var newArr = [];
    var joined = newArr.push(...arr1) + newArr.push(...arr2);
    var sorted = joined.sort();
    
    return newArr;
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));