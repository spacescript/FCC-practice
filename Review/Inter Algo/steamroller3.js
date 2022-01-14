function steamrollArray(arr) {
    var flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
  
const test = steamrollArray([1, [2], [3, [[4]]]]);
console.log(test);