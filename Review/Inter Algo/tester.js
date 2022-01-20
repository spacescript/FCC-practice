// const Person = function(firstAndLast) {
    
// };

function firstAndLast(firstAndLast) {

    // function tester (string) {
    //     return string.split(" ");
    // }

    var [first, last] = firstAndLast.split(" ");
    return "First: " + first + " Last: " + last;
}

var bobber = 'Bob';
// const bob = new Person('Bob Ross');
// const test = bob.getFullName();
// const test = tester(bobber);
const test = firstAndLast(bobber);
console.log(test);