function addTogether() {
    // if(arguments.length == 2) {
    //     if(isNaN(arguments[0]) || isNaN(arguments[1] == false)) {
    //         return "Check!"
    //     }
    // }
    // return "Fail";
    

    const [first, second] = arguments;
    if(typeof(first) !== "number") {
        if(typeof(second) !== "number") {
            return undefined;
        } else {
            var sumFirst = addTogether(first);
            return sumFirst(second);
        }
    } else {
        if(typeof(second) !== "number") {
            var sumFirst = addTogether(first);
            return sumFirst(second);
        } else {
            return first + second;
        }
    }

    return "Nothing";
}
  
var test = addTogether(2,"3");
console.log(test);