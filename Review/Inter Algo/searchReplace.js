function myReplace(str, before, after) {
    // var splitStr = str.split(" ");
    // var findBefore = splitStr.indexOf(before);
    return str.replace(before, after);
}
  
const test = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(test);