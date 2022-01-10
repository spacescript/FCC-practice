function uniteUnique(arr) {
    var finalList = [];

    for(let i = 0; i < arguments.length; i++) {
        var arrayArg = arguments[i];

        for(let j = 0; j < arrayArg.length; j++) {
            var indexValue = arrayArg[j];

            if(finalList.indexOf(indexValue) < 0) {
                finalList.push(indexValue);
            }
        }
    }

    return finalList;
}
  
const test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(test);