function fishTank (height, width, length, sandPercentage) {
    /*Дължина в см – цяло число в интервала [10 … 500]
Широчина в см – цяло число в интервала [10 … 300]
Височина в см – цяло число в интервала [10… 200]
Процент  – реално число в интервала 
*/
    let volumeCm3 = length * width * height;
    let volumeLiters = volumeCm3 / 1000;
    let sandFraction = sandPercentage / 100;
    let waterLitters = volumeLiters * (1 -sandFraction )
    console.log(waterLitters);
    
}
fishTank(85, 75, 47, 17);