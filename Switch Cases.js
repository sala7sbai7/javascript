//  ------------------------- ex 1


function getSpecialEvent(dayOfWeek) {
    switch(dayOfWeek) {
        case 1:
            console.log("Sunday: Family Movie Marathon!");
            break;
        case 2:
            console.log("Monday: Classic Movie Night");
            break;
        case 3:
            console.log("Tuesday: Action Blockbuster Special");
            break;
        case 4:
            console.log("Wednesday: Documentary Screening");
            break;
        case 5:
            console.log("Thursday: Sci-Fi Extravaganza");
            break;
        case 6:
            console.log("Friday: Horror Movie Night");
            break;
        case 7:
            console.log("Saturday: Comedy Show Special");
            break;
        default:
            console.log("Invalid day of the week. Please choose a number between 1 and 7.");
    }
}


getSpecialEvent(3);



//  ------------------------- ex 2


function setThemeColor(themeColor) {
    switch(themeColor) {
        case 'light':
            console.log("Setting theme to light mode.");
            break;
        case 'dark':
            console.log("Setting theme to dark mode.");
            break;
        case 'night':
            console.log("Setting theme to night mode.");
            break;
        default:
            console.log("Unsupported theme color. Please choose 'light', 'dark', or 'night'.");
    }
}


setThemeColor('dark');



//  ------------------------- ex 3


function checkNotificationStatus(notificationStatus) {
    switch(notificationStatus) {
        case 'new':
        case 'unread':
        case 'unopened':
            console.log("You have new movie notifications!");
            break;
        case 'read':
            console.log("No new notifications.");
            break;
        default:
            console.log("Unknown notification status.");
    }
}


checkNotificationStatus('unread');


//  ------------------------- ex 4

function describeMovieRating(movieRating) {
    switch(movieRating) {
        case 'G':
            console.log("G: General audiences – All ages admitted.");
            break;
        case 'PG':
            console.log("PG: Parental guidance suggested – Some material may not be suitable for children.");
            break;
        case 'PG-13':
            console.log("PG-13: Parents strongly cautioned – Some material may be inappropriate for children under 13.");
            break;
        case 'R':
            console.log("R: Restricted – Under 17 requires accompanying parent or adult guardian.");
            break;
        case 'NC-17':
            console.log("NC-17: Adults Only – No one 17 and under admitted.");
            break;
        default:
            console.log("Unknown rating.");
    }
}


describeMovieRating('PG-13');



//  ------------------------- ex 5


function evaluateAudienceScore(audienceScore) {
    if (audienceScore >= 90) {
        console.log("Must Watch!");
    } else if (audienceScore >= 75 && audienceScore <= 89) {
        console.log("Recommended");
    } else if (audienceScore >= 60 && audienceScore <= 74) {
        console.log("Mixed Reviews");
    } else {
        console.log("Skip It");
    }
}


evaluateAudienceScore(85);



//  ------------------------- ex 6

function handleUserInput(userInput) {
    switch (typeof userInput) {
        case 'string':
            console.log("The input is a string.");
            break;
        case 'number':
            console.log("The input is a number.");
            break;
        case 'boolean':
            console.log("The input is a boolean.");
            break;
        default:
            console.log("Unsupported input type.");
    }
}


handleUserInput(true);


//  ------------------------- ex 6

function getMovieReleaseQuarter(releaseMonth) {
    switch (true) {
        case (releaseMonth >= 1 && releaseMonth <= 3):
            console.log("Q1");
            break;
        case (releaseMonth >= 4 && releaseMonth <= 6):
            console.log("Q2");
            break;
        case (releaseMonth >= 7 && releaseMonth <= 9):
            console.log("Q3");
            break;
        case (releaseMonth >= 10 && releaseMonth <= 12):
            console.log("Q4");
            break;
        default:
            console.log("Invalid month. Please enter a number between 1 and 12.");
    }
}


getMovieReleaseQuarter(5); 