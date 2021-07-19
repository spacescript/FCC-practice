function fearNotLetter(str) {
    let missing = "Missing";
    let map = Array.prototype.map
    let numeralized = map.call(str, function(x) {
        return x.charCodeAt(0)
    })
    for(let i = 1; i < numeralized.length - 1; i++) {
        if(numeralized[i] != (numeralized[i-1] + 1)) {
            return numeralized[i];
        }
    }
    return missing;

    //if loop to check for incremental increases
    //draw fromCharCode of any missing increment

    // return str.charCodeAt(3);
    // return String.fromCharCode(100);
    
    // return a;
}
  
var test = fearNotLetter("abce");

console.log(test);