// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (list, bookName) {
    let newList = list;
    newList.push(bookName);
    return newList;
  
    // Change code above this line
}

// Change code below this line
function remove (list, bookName) {
    let newList = list;
    const book_index = newList.indexOf(bookName);
    if (book_index >= 0) {

        newList.slice(book_index, 1);
        return newList;

        // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);