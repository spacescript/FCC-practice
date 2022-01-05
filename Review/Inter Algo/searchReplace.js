function myReplace(str, before, after) {
    // var splitStr = str.split(" ");
    // var findBefore = splitStr.indexOf(before);
    // str.replace(before, after);
    var newAfter = after;
    var newBefore = before;
    if(before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
        newAfter = after.charAt(0).toUpperCase();
    } else {
        newBefore = after.charAt(0).toLowerCase();
    }
    return str.replace(newBefore, newAfter);
}
  
const test = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log(test);