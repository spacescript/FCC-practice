function palindrome(str) {
    var regex = /\W/g;
    var mySet = str.replace(regex, '').toLowerCase();
    var middle = Math.floor(mySet.length / 2);
    var searcher = [];

    // for(let i = 0; i < middle; i++) {
    //     for(let j = mySet.length - 1; j >= middle; j--) {
    //         if(mySet.charCodeAt(i) != mySet.charCodeAt(j)) {searcher.push("False at: " + i + " and " + j)}
    //         searcher.push(true);
    //         // return "Charcode i = " + mySet.charCodeAt(i) + " Charcode j = " + mySet.charCodeAt(j);
    //     }
    // }
    // return searcher;

    // return middle;

    return mySet.length;
}
  
const test = palindrome("A man, a plan, a canal. Panama");
console.log(test);