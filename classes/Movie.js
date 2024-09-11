// import the Media class:
const Media = require("./Media");
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static longestMovie(moviesArray) {
    return moviesArray.reduce((longest, movie) =>
      movie.duration > longest.duration ? movie : longest
    );
  }

  static calculateAverageRating(moviesArray) {
    const totalRating = moviesArray.reduce(
      (acc, movie) => acc + movie.rating,
      0
    );
    return totalRating / moviesArray.length;
  }
}
// don't change below
module.exports = Movie;
