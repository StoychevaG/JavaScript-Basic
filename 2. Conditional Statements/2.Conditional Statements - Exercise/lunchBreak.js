function lunchBreak(movie, timeOfMovie, timeOfBreak) {
    let timeForLunch = timeOfBreak / 8;
    let timeForRest = timeOfBreak / 4;
    let remainingTime = timeOfBreak - timeForLunch - timeForRest;
    let timeForMovie = remainingTime - timeOfMovie;
    timeForMovie = Math.abs(timeForMovie)
    if (remainingTime >= timeOfMovie) {
      console.log(
        `You have enough time to watch ${movie} and left with ${Math.ceil(timeForMovie)} minutes free time.`
      );
    } else {
      console.log(
        `You don't have enough time to watch ${movie}, you need ${Math.ceil(
          timeForMovie
        )} more minutes.`
      );
    }
  }
lunchBreak("Teen Wolf", 48, 60);
