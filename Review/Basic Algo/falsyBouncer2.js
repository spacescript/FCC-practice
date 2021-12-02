function bouncer(arr) {
    return arr.filter(Boolean);
}
  
const test = bouncer([7, "ate", "", false, 9]);
console.log(test);