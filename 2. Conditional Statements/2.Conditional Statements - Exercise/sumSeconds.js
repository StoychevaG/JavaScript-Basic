function sumSeconds(timeFirst, timeSecond, timeThird) {
  let allTime = timeFirst + timeSecond + timeThird;
  let minutes = Math.floor(allTime / 60);
  let seconds = allTime % 60;
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds(35, 45, 44);
