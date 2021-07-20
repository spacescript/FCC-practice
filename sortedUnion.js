function uniteUnique(arr) {
    var set = [...arguments];
    // var final = [];
    var combo = [];
    for(let i = 0; i < set.length; i++) {
        combo.push(...(set[i]));
    }
    // Successfully got a single array of all values
    // Now, I must use a map() or reduce() to remove all redundant values

    var finish = combo.reduce(function(accu, curVal) {
        if (accu.indexOf(curVal) === -1) {
            accu.push(curVal)
        }
        return accu
    }, [])
    
    return finish;
}
  
var test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(test);