function suppliesForSchool(pen, markers, litersOfCleaners, discount) {
  /*•	Брой пакети химикали - цяло число в интервала [0...100]
•	Брой пакети маркери - цяло число в интервала [0...100]
•	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
•	Процент намаление - цяло число в интервала [0...100]
*/
  let pricesOfPen = pen * 5.8;
  let priceOfMarkers = markers * 7.2;
  let priceOfLiterCleaners = litersOfCleaners * 1.2;
  let all = pricesOfPen + priceOfMarkers + priceOfLiterCleaners;
  let percentDiscount = discount / 100;
  let allDiscount = all * percentDiscount;
  let total = all - allDiscount;
  console.log(total);
}
suppliesForSchool(4, 2, 5, 13);
