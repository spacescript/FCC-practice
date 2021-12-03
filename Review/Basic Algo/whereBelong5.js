function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}
  
const test = getIndexToIns([40, 60], 50);
console.log(test);