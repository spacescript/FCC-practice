function myReplace(str, before, after) {
    var splitStr = str.split(" ");
    var findBefore = splitStr.indexOf(before);
    str.replace(before, after);
    var newAfter;
    if(before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
        newAfter = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        newAfter= after.charAt(0).toLowerCase() + after.slice(1);
    }
    // return newAfter.join('');
    return str.replace(before, newAfter);
}
  
const test = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log(test);