function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    let myKey = Object.keys(source);
    // for(let i = 0; i < Object.keys(collection).length; i++) {
    //     if(collection[i].hasOwnProperty(myKey) && collection[i].myKey == source) {
    //         arr.push(collection[i]);
    //     }
    // }
    return collection[0].myKey;

    // Only change code above this line
    // return arr;
}
  
const test = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], {last: "Capulet" });
console.log(test);