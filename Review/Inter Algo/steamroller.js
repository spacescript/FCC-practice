function steamrollArray(arr) {
    // return Array.isArray(arr[1]);
    // var newArr = [];
    // if(Array.isArray(arr[0])) {
    //     newArr.push(arr[0]);
    //     arr.slice
    //     steamrollArray(arr);
    // }
    arr.splice(1);
    return arr;
}

const test = steamrollArray([1, [2], [3, [[4]]]]);
// const test = steamrollArray([1, 2, 3, 4]);
console.log(test);