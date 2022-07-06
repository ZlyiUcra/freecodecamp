// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  const result = [...bookList];
  result.push(bookName);
  return result;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const result = [...bookList];
  const book_index = result.indexOf(bookName);

  if (book_index >= 0) {

    result.splice(book_index, 1);
    return result;

    // Change code above this line
    }
}