function addTogether() {
    if(arguments.length == 2) {
        if(isNaN(arguments[0]) || isNaN(arguments[1])) {
            return "Check!"
        }
    }
    return "Fail";
}
  
var test = addTogether(2,3);
console.log(test);