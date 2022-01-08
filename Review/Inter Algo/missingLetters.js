function fearNotLetter(str) {
    // var mySet = str.split("");
    var answer = [];
    var testArr = [97, 98, 99, 100]
    for(let i = 0; i < str.length; i++) {
        answer.push(str.charCodeAt(i));
    }
    return testArr.every(function(x,y) {
        if (y === x+1) {
            return true;
        }
        return false;
    });
}
  
const test = fearNotLetter("abce");
console.log(test);