
let movieRatings = [];

// 1
function initializeRatings() {
    movieRatings = []; 
}

// 2
function addRating(movieTitle, rating) {
    movieRatings.push([movieTitle, rating]); 
}

// 3
function findRating(movieTitle) {
    for (let i = 0; i < movieRatings.length; i++) {
        if (movieRatings[i][0] === movieTitle) {
            console.log(`${movieTitle} has a rating of ${movieRatings[i][1]}`);
            return;
        }
    }
    console.log("Movie was not found.");
}

// 4
function updateRating(movieTitle, newRating) {
    for (let i = 0; i < movieRatings.length; i++) {
        if (movieRatings[i][0] === movieTitle) {
            movieRatings[i][1] = newRating;
            console.log(`${movieTitle} rating updated to ${newRating}`);
            return;
        }
    }
    console.log("Movie was not found.");
}

// 5
function removeRating(movieTitle) {
    for (let i = 0; i < movieRatings.length; i++) {
        if (movieRatings[i][0] === movieTitle) {
            movieRatings.splice(i, 1); // Remove the movie at index i
            console.log(`${movieTitle} has been removed from the ratings.`);
            return;
        }
    }
    console.log("Movie was not found.");
}

// 6
function listMovies() {
    if (movieRatings.length === 0) {
        console.log("No movies in the list.");
        return;
    }

    console.log("Movies and their ratings:");
    for (let i = 0; i < movieRatings.length; i++) {
        console.log(`${movieRatings[i][0]} - ${movieRatings[i][1]}`);
    }
}

// 7
function highestRatedMovie() {
    if (movieRatings.length === 0) {
        console.log("No movies in the list.");
        return;
    }

    let highestRating = movieRatings[0][1];
    let highestRatedMovie = movieRatings[0][0];

    for (let i = 1; i < movieRatings.length; i++) {
        if (movieRatings[i][1] > highestRating) {
            highestRating = movieRatings[i][1];
            highestRatedMovie = movieRatings[i][0];
        }
    }

    console.log(`The highest-rated movie is ${highestRatedMovie} with a rating of ${highestRating}.`);
}

