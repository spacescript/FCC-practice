function myReplace(str, before, after) {
    // var sentence = str.split(" ");
    var index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase()
        + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase()
        + after.slice(1);
    }

    str = str.replace(before, after);
    return str;
}
  
var test = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

console.log(test);