function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    var srcKeys = Object.keys(source);
    return collection.filter(function(obj) {
        for (let i = 0; i < srcKeys.length; i++) {
            if (
                !obj.hasOwnProperty(srcKeys[i]) ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ) {
                return false;
            }
        }
        return true;
    });

    // Only change code above this line
}
  
var result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

console.log(result);