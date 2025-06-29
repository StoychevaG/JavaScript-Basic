function worldSwimmingRecord(recordSeconds, meters, timeForMeter) {
  let timeInSeconds = meters * timeForMeter;
  let delay = Math.floor(meters / 15) * 12.5;
  let totalTime = delay + timeInSeconds;
  let timeNeeded = totalTime - recordSeconds;
  if (totalTime < recordSeconds) {
    console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
  } else if (totalTime >= recordSeconds) {
    console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`
    );
  }
}

worldSwimmingRecord(55555.67, 3017, 5.03);
