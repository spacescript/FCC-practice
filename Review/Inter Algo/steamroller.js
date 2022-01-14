function steamrollArray(arr) {
    // return Array.isArray(arr[1]);
    var newArr = [];
    if(Array.isArray(arr[0])) {
        newArr.push(arr[0]);
        arr.splice(0,1);
        steamrollArray(arr);
    }

    return newArr;
    // arr.splice(0,1);
    // return arr;
    // newArr.push(arr[0]);
    // return arr;
}

const test = steamrollArray([1, [2], [3, [[4]]]]);
// const test = steamrollArray([1, 2, 3, 4]);
console.log(test);