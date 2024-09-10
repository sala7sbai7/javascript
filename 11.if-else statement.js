// ex -------------------------- 1

let movieRating = 6;
if (movieRating > 7) {
    console.log ("highly rated movie")
} else {
    console.log ("this movie has room for improvment")
};


// ex -------------------------- 2

let movieBudget = 1000000
if (movieBudget >= 1000000 && movieBudget <= 100000000) {
    console.log("big-budget movie")
} else {
    console.log("indie movie")
}



// ex -------------------------- 3


let movieGenre = "horror";
let audienceAge = 17;
if (movieGenre === "horror"){
  if (audienceAge >= 18) {
    console.log("suitable for the audience")
} else {
    console.log("not suitable for the audience")
}
} else {
    console.log("siutable for all audience")
 }


 // ex -------------------------- 4

 let firstMovieDuration = 11
 let secondMovieDuration = 10
 if (firstMovieDuration == secondMovieDuration) {
    console.log("movies have the same duration")
 } 
 else if (firstMovieDuration > secondMovieDuration) {
    console.log("the first movie is longer")
 }
 else {
    console.log("the second is longer")
 }


 // ex -------------------------- 5

  let viewerAge = 12
  if (viewerAge >= 13 && viewerAge < 18) {
    console.log("suitable for teens")
  } 
  else if (viewerAge >= 18) {
    console.log("suitable for adults")
  }
  else {
    console.log("suitable for kids")
  }


// ex -------------------------- 6

  let popularityScore = 90
  popularityScore > 80 ? console.log('popular movie') : console.log("less known movie");



// ex -------------------------- 7

    numOfAwards = 10;
    numOfAwards % 2 === 0 ? console.log('even number of awards ') : console.log("odd number of awards");



// ex -------------------------- 8

actorAge = 1
actorAge < 14 ? console.log('child actor') : actorAge > 14 && actorAge <= 24 ? console.log('young actor') : console.log('adult actor');




// ex -------------------------- 9

let hasInvitation = true;
hasInvitation === true ? console.log('welcome to the premier') : console.log('please check your invitation');


// ex -------------------------- 10

let screeningDuration = 500
if (screeningDuration < 40) {
  console.log ('short film')
} else if (screeningDuration >= 40 && screeningDuration < 120) {
  console.log ('feature film')
} else {
  console.log ('epic length movie')
}


// ex -------------------------- 11

let dayOfWeek ="sunday"
if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
  console.log ('special screening event')
} else {
  console.log ('regular movie showtimes')
}


// ex -------------------------- 12

let releaseYear = 2000;
if (releaseYear >= 2001 && releaseYear < 2100) {
  console.log ('21st century movie')
} else {
  console.log ('20th century movie')
}


// ex -------------------------- 13

let moviegenre = "action"
let movierating = 8
if (moviegenre === "action" && movierating >= 7) {
  console.log ('must watch')
} else {
  console.log ('check reviews before watching')
}


// ex -------------------------- 14

let ticketPrice = "13$"
if (parseInt(ticketPrice) <= 10) {
  console.log('discounted ticket')
} else {
  console.log ('regular ticket price')
}



// ex -------------------------- 15

let age = 22
let isAdult = true
if (age >= 18 || isAdult === false) {
  console.log ('allowed to watch')
} else {
  console.log ('age-restricted content')
}
 


// ex -------------------------- 16

let movieTitle = "qwdqppa22"
let search = "part"
let part = "2"
if (movieTitle.includes(search) || movieTitle.includes(part)) {
  console.log ('this move is sequel')
} else {
  console.log ('this movie is not sequel')
}
