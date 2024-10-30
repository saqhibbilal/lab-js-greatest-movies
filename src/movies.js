// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  var directors = [];
  for (var i = 0; i < moviesArray.length; i++) {
    directors.push(moviesArray[i].director);
  }
  // Remove duplicates
  var uniqueDirectors = directors.filter(function (director, index) {
    return directors.indexOf(director) === index;
  });
  return uniqueDirectors;
}
console.log("All directors:", getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  var count = 0;
  for (var i = 0; i < moviesArray.length; i++) {
    if (
      moviesArray[i].director === "Steven Spielberg" &&
      moviesArray[i].genre.includes("Drama")
    ) {
      count++;
    }
  }
  return count;
}
console.log("Number of drama movies directed by Steven Spielberg:", howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  var totalScore = 0;
  var count = 0;
  for (var i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].score) {
      totalScore += moviesArray[i].score;
      count++;
    }
  }
  var avgScore = totalScore / count;
  return Math.round(avgScore * 100) / 100;
}
console.log("Average score of all movies:", scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  var totalScore = 0;
  var count = 0;

  for (var i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].genre.includes("Drama")) {
      totalScore += moviesArray[i].score || 0;
      count++;
    }
  }

  if (count === 0) return 0;
  var avgDramaScore = totalScore / count;
  return Math.round(avgDramaScore * 100) / 100;
}
console.log("Average score of drama movies:", dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  var moviesCopy = moviesArray.slice();
  moviesCopy.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return moviesCopy;
}
console.log("Movies ordered by year:", orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  var titles = [];
  for (var i = 0; i < moviesArray.length; i++) {
    titles.push(moviesArray[i].title);
  }

  titles.sort();
  return titles.slice(0, 20);
}
console.log("First 20 movies ordered alphabetically:", orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  var moviesCopy = moviesArray.slice();
  var newMoviesArray = [];

  for (var i = 0; i < moviesCopy.length; i++) {
    var duration = moviesCopy[i].duration;
    var timeParts = duration.split(" ");
    var minutes = 0;

    for (var j = 0; j < timeParts.length; j++) {
      if (timeParts[j].includes("h")) {
        minutes += parseInt(timeParts[j]) * 60;
      } else if (timeParts[j].includes("min")) {
        minutes += parseInt(timeParts[j]);
      }
    }

    var newMovie = Object.assign({}, moviesCopy[i]);
    newMovie.duration = minutes;
    newMoviesArray.push(newMovie);
  }

  return newMoviesArray;
}
console.log("Movies with duration in minutes:", turnHoursToMinutes(movies));


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  var scoresByYear = {};
  for (var i = 0; i < moviesArray.length; i++) {
    var year = moviesArray[i].year;
    var score = moviesArray[i].score || 0;

    if (!scoresByYear[year]) {
      scoresByYear[year] = [];
    }
    scoresByYear[year].push(score);
  }

  var bestYear = 0;
  var bestAvgScore = 0;

  for (var year in scoresByYear) {
    var totalScore = 0;
    for (var j = 0; j < scoresByYear[year].length; j++) {
      totalScore += scoresByYear[year][j];
    }

    var avgScore = totalScore / scoresByYear[year].length;
    if (avgScore > bestAvgScore || (avgScore === bestAvgScore && year < bestYear)) {
      bestYear = year;
      bestAvgScore = avgScore;
    }
  }

  return "The best year was " + bestYear + " with an average score of " + bestAvgScore;
}
console.log(bestYearAvg(movies));


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
