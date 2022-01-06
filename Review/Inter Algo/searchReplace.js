function myReplace(str, before, after) {
    var splitStr = str.split(" ");
    var findBefore = splitStr.indexOf(before);
    str.replace(before, after);
    var newAfter = after.split("");
    // var
    // var newBefore = before.split("");
    if(before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
        newAfter[0].toUpperCase();
    } else {
        newAfter[0].toLowerCase();
    }
    return str.replace(before, newAfter);
}
  
const test = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log(test);