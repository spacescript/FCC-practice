function palindrome(str) {
    var regex = /\W/g;
    var mySet = str.replace(regex, '').toLowerCase();
    var middle = Math.floor(mySet.length / 2);
    var start = 0, end = mySet.length - 1, searcher = [];

    for(let i = 0; i <= middle; i++) {
        if((mySet.charCodeAt(start + i)) == (mySet.charCodeAt(end - i))) {
            return true;
        }
        return false;
        // searcher.push([mySet.charCodeAt(start + i), mySet.charCodeAt(end - i)]);
    }

    // return mySet.charCodeAt(start) + " and " + mySet.charCodeAt(end);
}
  
const test = palindrome("A man, a plan, a canal. Panama");
console.log(test);