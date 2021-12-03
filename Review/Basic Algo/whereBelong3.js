function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
    // return arr.filter(val => num > val);
}
  
const test = getIndexToIns([5, 3, 20, 3], 5);
console.log(test);