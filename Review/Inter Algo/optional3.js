function addTogether() {
    var [first, second] = arguments;
    if(typeof(first) !== "number") {
        return undefined;
    }
    if(second === undefined) {
        function addSecond(second) {
            if(typeof(second) !== "number") {
                return undefined;
            }
            else {
                return first + second;
            }
        }
        return addSecond;
    }
    else if (typeof(second) !== "number") {
        return undefined;
    }
    else {
        return first + second;
    }
}
  
const test = addTogether(2,3);
console.log(test);