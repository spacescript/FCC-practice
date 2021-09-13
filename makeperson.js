var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var words = firstAndLast.split(" ");
    // const [first, last] = ;

    this.getFullName = function() {
      return words;
    };
    // return firstAndLast;
};
  
var bob = new Person('Bob Ross');
var test = bob.getFullName();
console.log(test);