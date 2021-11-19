function findElement(arr, func) {
    return arr.length && !func(arr[0])
        ? findElement(arr.slice(1), func)
        : arr[0];
}
  
const test = findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(test);