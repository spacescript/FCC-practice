function destroyer(arr) {
    // var list = [...arguments[0]];

    for(let i = 1; i < arguments.length; i++) {
        arr.map(a => a.splice(arr.indexOf(arguments[i]), 1));
    }

    return arr;
}
  
const test = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(test);