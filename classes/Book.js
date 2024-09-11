// import the Media class:
const Media = require("./Media");
// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static highestRating(booksArray) {
    return booksArray.reduce((highest, book) =>
      book.rating > highest.rating ? book : highest
    );
  }

  static calculateAverageRating(booksArray) {
    const totalRating = booksArray.reduce((acc, book) => acc + book.rating, 0);
    return totalRating / booksArray.length;
  }
}

// don't change below
module.exports = Book;
