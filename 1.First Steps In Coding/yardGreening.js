function yardGreening(meters) {
  let priceOfAll = meters * 7.61;
  let discount = 18 / 100;
  let totalDiscount = discount * priceOfAll;
  let total = priceOfAll - totalDiscount;

  //"The final price is: {крайна цена на услугата} lv."
  //"The discount is: {отстъпка} lv."

  console.log(`The final price is: ${total} lv.`);
  console.log(`The discount is: ${totalDiscount} lv.`);
}
yardGreening(550);
