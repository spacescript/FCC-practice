function sumFibs(num) {
    if(num <= 0) return 0;

    var fibos = [1,1];
    let next = 0;

    while((next = fibos[0] + fibos[1]) <= num) {
        fibos.unshift(next);
    }

    return fibos.filter(x => x % 2 != 0).reduce((x, y) => x + y);
}
  
const test = sumFibs(75025);
console.log(test);