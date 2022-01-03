function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    // arr.push(collection.map(function(obj) => ))
    for(let i = 0; i < Object.keys(collection).length; i++) {
        if(collection[i].hasOwnProperty(Object.keys(source))) {
            arr.push(collection[i]);
        }
    }
    // if(collection[2].hasOwnProperty((Object.keys(source)))) {
    //     arr.push(collection[2]);
    // }
    // return Object.keys(source);
    // Only change code above this line
    return arr;
}
  
const test = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], {last: "Capulet" });
console.log(test);