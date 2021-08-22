function truthCheck(collection, pre) {
    var counter = 0;

    for(let v in collection) {
        if (collection[v].hasOwnProperty(pre) && Boolean(collection[v][pre])) {
            counter++;
        }
    }

    return counter == collection.length;
}
  
var test = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

console.log(test);