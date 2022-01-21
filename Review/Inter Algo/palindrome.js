function palindrome(str) {
    var regex = /[\W_]+/g;
    var mySet = str.replace(regex, '').toLowerCase();
    var middle = Math.floor(mySet.length / 2);
    var start = 0, end = mySet.length - 1, searcher = [];

    for(let i = 0; i <= middle; i++) {
        // if((mySet.charCodeAt(start + i)) == (mySet.charCodeAt(end - i))) {
        //     return true;
        // }
        // return false;
        searcher.push([mySet.charCodeAt(start + i), mySet.charCodeAt(end - i)]);
    }

    var key = searcher.map(function(array) {
        if(array[0] == array[1]) {
            return true;
        }
        return false;
    });

    return key.every(x => x ==true);

    // if([mySet.charCodeAt(start + 4) == mySet.charCodeAt(end - 4)]) {return true};

    // var fourTestStart = mySet.charCodeAt(start + 4);
    // var fourTestEnd = mySet.charCodeAt(end - 4);

    // return "Start: " + fourTestStart + " End: " + fourTestEnd;
    // if(fourTestStart == fourTestEnd) {return true} else {return false};

    // return searcher;
    // return mySet.charCodeAt(start) + " and " + mySet.charCodeAt(end);
    // return fourTestStart + " and " + fourTestEnd;
}
  
const test = palindrome("almostomla");
console.log(test);