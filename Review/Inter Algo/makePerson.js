const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly

    // 1) Split inputs and store in variables
    // 2) Create basic object structure
    // 3) Start working on individual functions

    var [first, last] = firstAndLast.split(" ");

    this.getFirstName = function() {
      return first;
    };

    this.getLastName = function() {
      return last;
    };

    this.getFullName = function() {
      return first + " " + last;
    };

    this.setFirstName = function(newFirst) {
      first = newFirst;
    };

    this.setLastName = function(newLast) {
      last = newLast;
    };

    this.setFullName = function(newFirstAndLast) {
      [first, last] = newFirstAndLast.split(" ");
    };

    // return firstAndLast;
};
  
const bob = new Person('Bob Ross');
const test = bob.getFullName();
console.log(test);