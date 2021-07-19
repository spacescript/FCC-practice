function fearNotLetter(str) {
    var currCharCode = str.charCodeAt(0);
    var missing = undefined;

    str
        .split("")
        .forEach(letter => {
            if(letter.charCodeAt(0) === currCharCode) {
                currCharCode++;
            } else {
                missing = String.fromCharCode(currCharCode);
            }
        });
    
    return missing;
}
  
var test = fearNotLetter("abce");
console.log(test);