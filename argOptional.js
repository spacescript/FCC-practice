function addTogether() {
    // if(arguments.length == 2) {
    //     if(isNaN(arguments[0]) || isNaN(arguments[1] == false)) {
    //         return "Check!"
    //     }
    // }
    // return "Fail";
    

    const [first, second] = arguments;
    if(typeof(first) !== "number") {
            return undefined;
    }
    else if (second === undefined) {
      function addSecond(second) {
        if (typeof(second) !== "number") {
          return undefined;
        } 
        else {
          return first + second;
        }
      }
      return addSecond;
    } 
      else if (typeof(second) !== "number"){
          return undefined;
      } else {
          return first + second;
      }
}
  
var test = addTogether(2,3);
console.log(test);