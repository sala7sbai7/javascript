//  ------------------ ex 1


let movieTitles = ["Inception", "The Dark Knight", "Interstellar"];

function findLongestTitle(titles) {
    let longestTitle = "";

    for (let i = 0; i < titles.length; i++) {
        if (titles[i].length > longestTitle.length) {
            longestTitle = titles[i];
        }
    }

    console.log("The movie with the longest title is:", longestTitle);
}


findLongestTitle(movieTitles);


//  ------------------ ex 2


let movieRatings = [8.3, 7.5, 9.0, 8.7];

function calculateAverageRating(ratings) {
    let total = 0;

    for (let i = 0; i < ratings.length; i++) {
        total += ratings[i];
    }

    let average = total / ratings.length;
    console.log("The average rating is:", average.toFixed(2));
}


calculateAverageRating(movieRatings); 


//  ------------------ ex 3


let movieTitles = ["Inception", "The Dark Knight", "Interstellar"];

function reverseMovieTitles(titles) {
    let reversedTitles = [];

    for (let i = titles.length - 1; i >= 0; i--) {
        reversedTitles.push(titles[i]);
    }

    console.log("Reversed movie titles:", reversedTitles);
}


reverseMovieTitles(movieTitles);


//  ------------------ ex 4


let movieRatings = [8.3, 7.5, 9.0, 8.7];

function increaseRatings(ratings) {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i] += 0.5;
    }

    console.log("Updated movie ratings:", ratings);
}


increaseRatings(movieRatings);


//  ------------------ ex 5


let movieRatings = [8.3, 7.5, 9.0, 8.7];

function filterHighRatings(ratings) {
    let highRatings = [];

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > 8.0) {
            highRatings.push(ratings[i]);
        }
    }

    console.log("Ratings over 8.0:", highRatings);
}


filterHighRatings(movieRatings);



//  ------------------ ex 6


let movieRatings = [8.3, 8.7, 9.0, 8.7, 8.3];
let specificRating = 8.7;

function countSpecificRating(ratings, targetRating) {
    let count = 0;

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] === targetRating) {
            count++;
        }
    }

    console.log("The rating", targetRating, "appears", count, "times.");
}


countSpecificRating(movieRatings, specificRating); 


//  ------------------ ex 7



let watchedList = ["Inception", "The Dark Knight"];
let wishList = ["Interstellar", "Inception"];

function findCommonMovies(watched, wish) {
    let commonMovies = [];

    for (let i = 0; i < watched.length; i++) {
        if (wish.includes(watched[i])) {
            commonMovies.push(watched[i]);
        }
    }

    console.log("Movies in both lists:", commonMovies);
}


findCommonMovies(watchedList, wishList);


//  ------------------ ex 8


let movieRatings = [8.3, 7.5, 9.0, 8.7];
let minRating = 8.0;

function checkRatingsAboveThreshold(ratings, threshold) {
    let allAboveThreshold = true;

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] < threshold) {
            allAboveThreshold = false;
            break;
        }
    }

    console.log("All ratings above threshold:", allAboveThreshold);
}


checkRatingsAboveThreshold(movieRatings, minRating); 




//  ------------------ ex 9

let movieRatings = [8.3, 7.5, 9.0, 8.7];

function findMaxRating(ratings) {
    let maxRating = ratings[0];  // Start with the first rating

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > maxRating) {
            maxRating = ratings[i];
        }
    }

    console.log("The highest rating is:", maxRating);
}


findMaxRating(movieRatings);

//  ------------------ ex 10



let movieRatings = [8.3, 7.5, 9.0, 8.7];

function findHighestRating(ratings) {
    let highestRating = ratings[0];  // Initialize with the first rating

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > highestRating) {
            highestRating = ratings[i];
        }
    }

    console.log("The highest rating is:", highestRating);
}


findHighestRating(movieRatings);  