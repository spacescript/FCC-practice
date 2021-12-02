function bouncer(arr) {
    return arr.map(function(x) {
        if (Boolean(x) == true) {
            return "This is true!";
        }
        return "This is false!";
    })
}
  
const test = bouncer([7, "ate", "", false, 9]);
console.log(test);