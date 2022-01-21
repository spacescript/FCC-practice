function palindrome(str) {
    var regex = /\W/g;
    var mySet = str.replace(regex, '').toLowerCase();
    return mySet;
}
  
const test = palindrome("A man, a plan, a canal. Panama");
console.log(test);