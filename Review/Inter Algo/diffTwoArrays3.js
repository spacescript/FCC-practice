function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(firstArr, secondArr) {
        return firstArr.filter(item => secondArr.indexOf(item) === -1);
    }
}
  
const test = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(test);