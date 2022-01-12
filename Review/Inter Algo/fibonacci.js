function sumFibs(num) {
    var fibos = [1, 1];

    for(let i = 1; i <= num; i++) {
        fibos.push(fibos[i] + fibos[i-1]);
    }

    return fibos.filter(x => x % 2 == 1 && x < num).reduce((x, y) => x + y);
    
    // return odds;
}
  
const test = sumFibs(75025);
console.log(test);