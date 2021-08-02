function smallestCommons(arr) {
    var ordered = arr.sort(function(a, b) {return a - b;});
    var smallBoi = ordered[0];
    var bigBoi = ordered[1];

    var fullList = [];
    for(let i = smallBoi; i <= bigBoi; i++) {
        fullList.push(i);
    }

    // var bBMultiples = [];
    // for(let i = 1; i <= (bigBoi * bigBoi); i++) {
    //     bBMultiples.push((bigBoi * i));
    // }

    let upperBound = 1;
    for (let i = smallBoi; i <= bigBoi; i++) {
        upperBound *= i;
    }

    

    return upperBound;
}
  
  
var test = smallestCommons([1,5]);
console.log(test);