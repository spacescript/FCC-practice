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

    // var typeSet = str
    //                 .split('')
    //                 .map(x => parseInt(x));
    //                 // .map(x => typeof(x));



    // typeSet = typeSet.map(x => parseInt(x));
    // typeSet = typeSet.map(x => typeof(x));
    // .map(x => typeof(x))

    return numbCounter[0];

}
  
const test = telephoneCheck("(755)555-55557");
console.log(test);