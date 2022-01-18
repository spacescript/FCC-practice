function steamrollArray(arr) {
    // return Array.isArray(arr[1]);
    var newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            newArr.push(...steamrollArray(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }

    // var reset = function choice() {
    //     if (newArr.length >= arr.length) {
    //         return newArr;
    //     }
    // }
    return newArr;
    // arr.splice(0,1);
    // return arr;
    // newArr.push(arr[0]);
    // return arr;
}

const test = steamrollArray([1, [2], [3, [[4]]]]);
// const test = steamrollArray([1, 2, 3, 4]);
console.log(test);