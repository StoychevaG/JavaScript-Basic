function toyShop(priceVacation, puzzles, dolls, bears, minions, trucks) {
  let allToys = puzzles + dolls + bears + minions + trucks;
  let pricePuzzles = puzzles * 2.6;
  let priceDols = dolls * 3;
  let priceBears = bears * 4.1;
  let priceMinions = minions * 8.2;
  let priceTrucks = trucks * 2;
  let totalPrice =
    pricePuzzles + priceDols + priceBears + priceMinions + priceTrucks;
  if (allToys > 50) {
    totalPrice = totalPrice * 0.75;
  }
  let allWithRent = totalPrice - totalPrice * 0.1;
  let enoughOrNot = allWithRent - priceVacation;
  enoughOrNot = Math.abs(enoughOrNot);
  if (allWithRent >= priceVacation) {
    console.log(`Yes! ${enoughOrNot.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${enoughOrNot.toFixed(2)} lv needed.`);
  }
}

toyShop(40.8,
    20,
    25,
    30,
    50,
    10
    );
