function whatIsInAName(collection, source) {
    // const arr = [];
    // Only change code below this line
    let sourceKey = Object.keys(source);
    // for(let i = 0; i < Object.keys(collection).length; i++) {
    //     if(collection[i].hasOwnProperty(myKey) && collection[i].myKey == source) {
    //         arr.push(collection[i]);
    //     }
    // }

    return collection.filter(function(obj) {
        for(var i = 0; i < sourceKey.length; i++) {
            if(
                !obj.hasOwnProperty(sourceKey[i]) ||
                obj[sourceKey[i]] !== source[sourceKey[i]]
            ) {return false;}
        }
        return true;
    });

    // Only change code above this line
    // return arr;
}
  
const test = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], {last: "Capulet" });
console.log(test);