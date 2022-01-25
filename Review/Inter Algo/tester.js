function telephoneCheck(str) {
    // Create a set of ascii code
    var mySet = str.split('').map(x => x.charCodeAt(0));

    //Setup function for checking invalid characters
    function filterOut(x) {
        var list = [32, 40, 41, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        if( list.indexOf(x) == -1 ) {return false}
        else {return true};
    }

    //Calling function for invalid chars
    // mySet.map(x => filterOut(x));

    // var filterSet = 
    // return mySet.every(x => filterOut(x));
    // return filterSet.every(true);

    var threeDigits = /\d{3}/g
    var fourDigits = /\d{4}/g
    
    // return str.match((threeDigits && fourDigits));
    // return str.test((threeDigits && fourDigits));
    // return fourDigits.test(str);
    return threeDigits.test(str);
}
  
const test = telephoneCheck("355 555 5555");
console.log(test);