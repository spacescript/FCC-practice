function sumFibs(num) {
    var fibs = [1, 1];

    for(let i = 1; fibs[i] < num; i++) {
        fibs.push(fibs[i] + fibs[(i-1)]);
    };

    fibs = fibs.filter(digi => digi <= num);
    var answer = fibs.reduce((accu, curVal) => accu + curVal);
    return answer;
}
  
var test = sumFibs(14);
console.log(test);