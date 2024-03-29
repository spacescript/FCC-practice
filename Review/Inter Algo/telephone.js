function telephoneCheck(str) {
    // Create a set of ascii code for multiple filters
    var mySet = str.split('').map(x => x.charCodeAt(0));

    // Remove all non-digits for numerical evaluation
    var numbCounter = (str.replace(/\D/g, ''));
    // Setup function for testing numerical eval
    function numbFilter(num) {
        if (num.length > 11 || num.length < 10) {
            return false;
        } else if (num.length === 11 && num[0] != 1) {
            return false;
        } else {
            return true;
        }
    }
    //Activate numerical eval (will check length for 10, or 11 with a country code that must be 1)
    if (numbFilter(numbCounter) == false) {
        return false;
    }


    //Setup function for checking invalid characters
    function filterOut(x) {
        var list = [32, 40, 41, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        if( list.indexOf(x) == -1 ) {return false}
        else {return true};
    }
    //Calling function for invalid chars
    if(mySet.every(x => filterOut(x)) == false){
        return false
    }

    //Function for checking proper format
    function formatFilter() {
        var firstChar = [40, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        // var threeDigits = /\d{3}/
        var fourDigits = /\d{4}/
        if( firstChar.indexOf(mySet[0]) == -1 ) {return false}
        else if ( ( mySet.indexOf(40) != -1 && mySet.indexOf(41) == -1 ) || ( mySet.indexOf(40) == -1 && mySet.indexOf(41) != -1 )  ) {
            return false;
        } else if ( fourDigits.test(str) == false) {
            return false;
        }
    }
    if( formatFilter() == false ) {return false};

    return true;
}
  
const test = telephoneCheck("55 55-55-555-5");
console.log(test);