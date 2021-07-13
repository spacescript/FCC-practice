function myReplace(str, before, after) {
    // var sentence = str.split(" ");
    var index = str.indexOf(before);
    // if (before[index] === before[index].toUpperCase()) {
    //     return "Capitalized!"
    // }
    // return index;
    return str[index] == str[index].toUpperCase();
}
  
var test = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

console.log(test);