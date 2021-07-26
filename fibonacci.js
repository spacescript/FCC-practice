function sumFibs(num) {
    var fibs = [1, 1];
    for(let i = 1; i < num; i++) {
        fibs.push(i + fibs[(i-1)]);
    };
    return fibs
}
  
var test = sumFibs(12);
console.log(test);