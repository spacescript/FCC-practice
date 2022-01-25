function telephoneCheck(str) {
    var mySet = str.split('').map(x => x.charCodeAt(0));
    var numbCounter = (str.replace(/\D/g, ''));

    function numbFilter(num) {
        if (num.length > 11 || num.length < 10) {
            return false;
        } else if (num.length === 11 && num[0] != 1) {
            return false;
        } else {
            return true;
        }
    }

    if (numbFilter(numbCounter) == false) {
        return false;
    }

    
    function formatFilter()

    return mySet;

}
  
const test = telephoneCheck("(355)555-5555");
console.log(test);