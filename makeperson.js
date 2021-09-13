var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var words = firstAndLast.split(" ");
    var [baseFirstName, baseLastName] = [words[0], words[1]];

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
      return first;
    }

    this.setLastName = function(last) {
      var [firstName, lastName] = [words[0], last];
      return last;
    }

    this.setFullName = function(firstAndLast2) {
      var names = firstAndLast2.split(" ");
      var [firstName, lastName] = [names[0], names[1]];
      return firstName + lastName;
    }

    return baseFirstName + baseLastName;
};
  
var bob = new Person('Bob Ross');
var test = bob.setLastName('Jack London');
console.log(test);