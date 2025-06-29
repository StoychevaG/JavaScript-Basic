function repainting(nylon, paint, thinner, hoursForWork) {
  /*1.Необходимо количество найлон (в кв.м.) - цяло число в интервала 
2.Необходимо количество боя (в литри) - цяло число в интервала
3.	Количество разредител (в литри) - цяло число в интервала
4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала 
 */
  let allNylon = (nylon + 2) * 1.5;
  let allPaint = paint * 14.5;
  let allThinner = thinner * 5;
  let morePaint = allPaint + allPaint * 0.1;
  let bags = 0.4;
  let allMaterials = allNylon + morePaint + allThinner + bags;
  let forOneHour = allMaterials * 0.3;
  let priceOfMasters = forOneHour * hoursForWork;

  console.log(priceOfMasters + allMaterials);
}
repainting(10, 11, 4, 8);
