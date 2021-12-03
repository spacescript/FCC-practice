function getIndexToIns(arr, num) {
    let index = arr
        .sort((a, b) => a - b)
        .findIndex(currNum => num <= currNum);

    return index === -1 ? arr.length : index;
}
  
const test = getIndexToIns([40, 60], 50);
console.log(test);