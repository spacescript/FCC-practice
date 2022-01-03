function whatIsInAName(collection, source) {
    // const arr = [];
    // Only change code below this line
    // return Object.keys(collection).filter(function(key) {
    //     collection[key] == source;
    // });
    return Object.keys(collection);
    
    // Only change code above this line
    // return arr;
}
  
const test = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(test);