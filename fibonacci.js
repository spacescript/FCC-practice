function sumFibs(num) {
    var fibs = [1, 1];

    for(let i = 1; fibs[i] < num; i++) {
        fibs.push(fibs[i] + fibs[(i-1)]);
    };

    fibs = fibs.filter(digi => digi <= num);
    fibs = fibs.filter(digi => digi%2);
    var answer = fibs.reduce((accu, curVal) => accu + curVal);
    return answer;
}
  
var test = sumFibs(1000);
console.log(test);