//  ----------------------- 1


let movieLibrary = ["Inception", "The Matrix", "Interstellar"];
let movieToCheck = "Inception";

if (movieLibrary.includes(movieToCheck)) {
    console.log(`${movieToCheck} is in the library.`);
} else {
    console.log(`${movieToCheck} is not in the library.`);
}


//  ----------------------- 2


let releaseDates = ["1999", "2010", "2014"];
let reversedDates = releaseDates.reverse();

console.log(reversedDates);



//  ----------------------- 3


let movieGenres = ["Sci-Fi", "Action", "Adventure"];
let genreString = movieGenres.join(", ");

console.log(genreString);



//  ----------------------- 4


let movieGenress = ["Sci-Fi", "Action", "Adventure"];
let genreToCheck = "Action";

if (movieGenress.includes(genreToCheck)) {
    console.log(`${genreToCheck} is in the genres list.`);
} else {
    console.log(`${genreToCheck} is not in the genres list.`);
}


//  ----------------------- 5


let movieTitles = ["Inception", "The Matrix", "Interstellar"];
let specificMovie = "Interstellar";

let index = movieTitles.indexOf(specificMovie);

if (index !== -1) {
    console.log(`${specificMovie} found at index ${index}.`);
} else {
    console.log("Movie not found.");
}


//  ----------------------- 6

let upcomingReleases = ["Avatar", "Dune", "Tenet"];

upcomingReleases.pop();

console.log(upcomingReleases);



//  ----------------------- 7

let classicMovies = ["The Godfather", "Citizen Kane"];
let newMovie = "Casablanca";

classicMovies.unshift(newMovie);

console.log(classicMovies);


//  ----------------------- 8

let filmNoir = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];

let removedMovie = filmNoir.shift();

console.log(removedMovie);



//  ----------------------- 9

let actionMovies = ["Die Hard", "John Wick"];
let comedyMovies = ["Superbad", "The Hangover"];

let allMovies = actionMovies.concat(comedyMovies);

console.log(allMovies);


//  ----------------------- 10

let movieTitless = ["Inception", "The Matrix", "Interstellar"];

movieTitles.sort();

console.log(movieTitless);



//  ----------------------- 11

let quotesString = "hello,world";

let quotesArray = quotesString.split(",");

console.log(quotesArray);



//  ----------------------- 12




//  ----------------------- 13

let movieWishlist = ["The Matrix 4", "Avatar 2", "Dune"];

movieWishlist.length = 0;

console.log(movieWishlist);


//  ----------------------- 14

let moviesss = ["Inception", "Interstellar"];
let newMoviee = "Tenet";

movies.push(newMoviee);

console.log(moviesss);


//  ----------------------- 15

let moviess = ["Inception", "Interstellar", "Tenet"];

let removedMoviee = moviess.shift();

console.log(removedMoviee);



//  ----------------------- 16


let moviessss = ["Inception", "Interstellar", "Tenet"];

let movieString = moviessss.join("-");

console.log(movieString);


//  ----------------------- 17

let movies = ["Inception", "Interstellar", "Tenet"];
let movieToFind = "Interstellar";

let indexx = movies.indexOf(movieToFind);

console.log(index);



//  ----------------------- 18

let moviesssss = ["Inception", "Interstellar", "Tenet"];

moviesssss.reverse();

console.log(movies);





//  ----------------------- 19




