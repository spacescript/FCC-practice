function addTogether() {
    // if(arguments.length == 2) {
    //     if(isNaN(arguments[0]) || isNaN(arguments[1] == false)) {
    //         return "Check!"
    //     }
    // }
    // return "Fail";
    

    const [first, second] = arguments;
    if(typeof(first) !== "number") {
        
    }

    return isNaN(arguments[1]);
}
  
var test = addTogether("2",3);
console.log(test);