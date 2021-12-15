// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (list, bookName) {
    var newList = [...list];
    newList.push(bookName);
    return newList;
  
    // Change code above this line
}

// Change code below this line
function remove (list, bookName) {
    var newList2 = [...list];
    if (newList2.indexOf(bookName) >= 0) {

        newList2.splice(newList2.indexOf(bookName), 1);
        return newList2;

        // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log("bookList = " + bookList);
console.log("newBookList = " + newBookList);
console.log("newerBookList = " + newerBookList);
console.log("newestBookList = " + newestBookList);