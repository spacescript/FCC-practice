function addTogether() {
    // My plan:
    // 1) Identify arguments
        // A) Confirm # of args
        // B) Confirm if args are numbers
    // 2) if args.length < 2 then -->
        // A) return a new function
    // 3) if args.length = 2 then -->
        // A) Add together and return

    if (arguments.length == 1) {
        var first = arguments[0];
        // if(typeof(first) != "number") {
        //     return undefined;
        // } else {
        //     var partial = function continueSum(num) {
        //         // return num + first;
        //         return "Here!";
        //     }
        // }
        if(typeof(first) === "number") {
            var partial = function continueSum(num) {
                // return num + first;
                return "here";
            }
        } else {
            return undefined;
        }
        return partial;
    } else if (arguments.length == 2) {
        var first = arguments[0], second = arguments[1];
        if (typeof(first) === "number" && typeof(second) === "number") {
            return first + second;
            // return "Here!";
        } else {
            return undefined;
        }
    }
}
  
const test = addTogether(2)([3]);
console.log(test);