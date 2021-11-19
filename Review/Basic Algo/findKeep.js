function findElement(arr, func) {
    const mySet = arr.map(func);
    for(let i = 0; i <= arr.length; i++) {
        if (mySet[i] == true) {
            return arr[i];
        };
    }
    return undefined;

    // return arr.filter(func)[0];
}
  
const test = findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(test);