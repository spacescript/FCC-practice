var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var words = firstAndLast.split(" ");
    // var [firstName, lastName] = [words[0], words[1]];

    this.getFirstName = function() {
      var [firstName, lastName] = [words[0], words[1]];
      return firstName;
    };

    this.getLastName = function() {
      var [firstName, lastName] = [words[0], words[1]];
      return lastName;
    };

    this.getFullName = function() {
      var [firstName, lastName] = [words[0], words[1]];
      return firstName + " " + lastName;
    };

    this.setFirstName = function(first) {
      var [firstName, lastName] = [first, words[1]];
    }

    return firstAndLast;
};
  
var bob = new Person('Bob Ross');
var test = bob.setFirstName('Jack');
console.log(test);