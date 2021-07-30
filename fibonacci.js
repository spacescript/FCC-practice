function sumFibs(num) {
    var fibs = [1, 1];

    for(let i = 1; fibs[i] < num; i++) {
        fibs.push(i + fibs[(i-1)]);
    };

    return fibs
}
  
var test = sumFibs(14);
console.log(test);