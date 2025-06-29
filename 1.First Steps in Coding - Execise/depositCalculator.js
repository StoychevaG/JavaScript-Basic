function depositCalculator(deposit, months, oneYearPercentage) {
  /*сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
От конзолата се четат 3 реда:
1.Депозирана сума – реално число в интервала [100.00 … 10000.00]
2.Срок на депозита (в месеци) – цяло число в интервала [1…12]
3.Годишен лихвен процент – реално число в интервала [0.00 …100.00]
*/
  let percentage = oneYearPercentage / 100;
  let depositeToPercentage = deposit * percentage;
  let depositeForMonth = depositeToPercentage / 12;

  let sumOfdeposite = deposit + months * depositeForMonth;
  console.log(sumOfdeposite);
}
depositCalculator(200, 3, 5.7);
