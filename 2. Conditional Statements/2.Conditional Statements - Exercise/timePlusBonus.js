function timePlusBonus(hour, minutes) {
  let minutesPlus = minutes + 15;
  if (minutesPlus > 59) {
    hour += 1;
    minutesPlus -= 60;
  }
  if (hour > 23) {
    hour = 0;
  }
  if (minutesPlus < 10) {
    console.log(`${hour}:0${minutesPlus}`);
  } else {
    console.log(`${hour}:${minutesPlus}`);
  }
}
timePlusBonus(12, 48);
