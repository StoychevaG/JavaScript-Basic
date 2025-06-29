function shoping(budget, videocards, processors, ram) {
  let priceVideocards = videocards * 250;
  let priceProcesors = (priceVideocards * 0.35) * processors;
  let priceRam = (priceVideocards * 0.10) * ram;
    let totalPrice = priceVideocards + priceProcesors + priceRam;
    
  if (videocards > processors) {
    totalPrice = totalPrice - (totalPrice * 0.15);
    }
    let enoughOrNot = budget - totalPrice
    enoughOrNot = Math.abs(enoughOrNot).toFixed(2)
    if (budget > totalPrice) {
        console.log(`You have ${enoughOrNot} leva left!`);
    } else {
        console.log(`Not enough money! You need ${enoughOrNot} leva more!`);
        
    }
}
shoping(920.45,
    3,
    1,
    1
    );
