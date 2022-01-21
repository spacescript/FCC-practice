function palindrome(str) {
    var regex = /\W/g;
    var mySet = str.replace(regex, '').toLowerCase();
    var middle = Math.floor(mySet.length / 2);

    for(let i = 0; i < mySet.length; i++) {
        for(let j = mySet.length - 1; j > -1; j--) {
            if(mySet.charCodeAt(i) != mySet.charCodeAt(j)) {return false}
            // return "Charcode i = " + mySet.charCodeAt(i) + " Charcode j = " + mySet.charCodeAt(j);
        }
    }
    return true;

    return middle;
}
  
const test = palindrome("A man, a plan, a canal. Panama");
console.log(test);