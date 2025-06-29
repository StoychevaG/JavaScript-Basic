function basketballEquipment (yearTax) {
let shoes = yearTax - (yearTax * 0.40);
let equip = shoes - (shoes * 0.20);
let ball =  equip / 4;
let accesories = ball / 5;
let allForYear = yearTax + shoes + equip + ball + accesories 

console.log(allForYear)
} 
basketballEquipment (365);