function orbitalPeriod(arr) {
    // My Plan:
    // 1) Be able to work through array of objects
    // 5) Manipulate object Properties
    // 2) Develop a simple return for the arithmatic answer
    // 3) Declare variables
        // A) A + R = alt
        // B) 2 pi
    // 4) Run the math with checkpoints
        // A) alt^3
        // B) Divide by GM
        // C) Square root
        // D) Final result after * 2pi
    // 6) DONE!

    var altitude = arr.map(x => x["avgAlt"]);

    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const twoPi = Math.PI * 2;

    // function orbCalc(num, index) {
    //     var alt = altitude[index] + earthRadius;
    
    //     // console.log("Current answer: " + answer);
    //     return Math.round(twoPi * Math.sqrt(Math.pow(alt, 3) / GM))
    // }

    for(let i = 0; i < altitude.length; i++) {
        arr.map(function(ele) {
            delete ele.avgAlt;
            // ele.orbitalPeriod = Math.round(twoPi * Math.sqrt(Math.pow(altitude[i], 3) / GM));
        });
        arr[i].orbitalPeriod = Math.round(twoPi * Math.sqrt(Math.pow((altitude[i] + earthRadius), 3) / GM));
    }

    return arr;
}
  
const test = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
console.log(test);