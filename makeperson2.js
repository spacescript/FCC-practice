var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var words = firstAndLast.split(" ");
    var [firstName, lastName] = [words[0], words[1]];

    this.getFirstName = function() {
        return firstName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getFullName = function() {
        return firstName + " " + lastName;
    };

    this.setFirstName = function(first) {
        firstName = first;
    }

    this.setLastName = function(last) {
        lastName = last;
    }

    this.setFullName = function(firstAndLast2) {
        var names = firstAndLast2.split(" ");
        [firstName, lastName] = [names[0], names[1]];
        return firstName + lastName;
    }

    return firstName + lastName;
};
  
var bob = new Person('Bob Ross');
var test = bob.setLastName('Jack London');
console.log(test);