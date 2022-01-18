function truthCheck(collection, pre) {
    var counter = 0;

    for (var e in collection) {
        if(collection[e].hasOwnProperty(pre) && Boolean(collection[e][pre])) {
            counter++;
        }
    }

    return counter == collection.length;
}
  
const test = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

console.log(test);