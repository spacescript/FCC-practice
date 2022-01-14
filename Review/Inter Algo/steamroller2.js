function steamrollArray(arr) {
    const newArr = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(steamrollArray(item));
        } else {
            acc.push(item);
        }

        return acc;
    }, []);
    return newArr;
}
  
const test = steamrollArray([1, [2], [3, [[4]]]]);
console.log(test);