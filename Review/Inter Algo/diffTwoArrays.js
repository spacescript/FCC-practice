function diffArray(arr1, arr2) {
    const newArr = [];
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; i++) {
            if(arr1[i] !== arr2[j] && j == (arr2.length - 1)) {
                newArr.push(arr1[i]);
            }
            if(arr2[j] !== arr1[i] && i == (arr1.length - 1)) {
                newArr.push(arr2[j]);
            }
        }
    }
    // if((indexOf(arr1[i])) !== (indexOf(arr2[j])))
    return newArr;
}
  
const test = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(test);