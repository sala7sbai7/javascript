// ------------------  - - - - --  - - - 1


function getMovies(movies) {
    return movies.map(movie => movie.title);
   }

 getMovies = (movies) => movies.map(movie => movie.title);

 // ------------------  - - - - --  - - - 2

 function averageMovieRating(rating) {
    if (rating > 7) {
        return "Good";
    } else if (rating > 5) {
        return "Average";
    } else {
        return "Bad";
    }
}


 averageMovieRating = (rating) => {
    if (rating > 7) {
        return "Good";
    } else if (rating > 5) {
        return "Average";
    } else {
        return "Bad";
    }
};

 // ------------------  - - - - --  - - - 3


 function getTotalMovieLength(movies) {
    let totalLength = 0;
    for (let i = 0; i < movies.length; i++) {
        totalLength += movies[i].length;
    }
    return 'Total movie length is ' + totalLength + ' minutes';
}

 getTotalMovieLength = (movies) => {
    let totalLength = 0;
    for (let i = 0; i < movies.length; i++) {
        totalLength += movies[i].length;
    }
    return `Total movie length is ${totalLength} minutes`;
};


 // ------------------  - - - - --  - - - 4

 const sortedMovies = movies.sort(function(a, b) {
    return b.averageRating - a.averageRating;
});


sortedMovies = movies.sort((a, b) => b.averageRating - a.averageRating);



 // ------------------  - - - - --  - - - 5

 function getMovieTitles(movies) {
    return movies.map(function(movie) {
        return movie.title;
    });
}


 getMovieTitles = (movies) => movies.map(movie => movie.title);

