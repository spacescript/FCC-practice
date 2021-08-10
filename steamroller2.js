function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
  
var test = steamrollArray([1, [2], [3, [[4]]]]);
console.log(test);