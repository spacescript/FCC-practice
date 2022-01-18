function addTogether() {
    // return arguments.length;
    var nums = arguments.map(x => nums.push(x));
    return nums;
}
  
const test = addTogether(2,3);
console.log(test);