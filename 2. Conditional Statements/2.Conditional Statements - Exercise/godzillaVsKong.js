function godzillaVsKong(budget, extras, chlothesForOne ) {
    let decor = budget * 0.10;
    if (extras > 150) {
        chlothesForOne = chlothesForOne * 0.90
    }
    let allExtrasClothes = extras * chlothesForOne
    let allPrice = decor + allExtrasClothes
    let enoughOrNot = budget - allPrice
    enoughOrNot = Math.abs(enoughOrNot)
    if (allPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${enoughOrNot.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${enoughOrNot.toFixed(2)} leva left.`);
        
    }
}
godzillaVsKong(9587.88,
    222,
    55.68
    
    );