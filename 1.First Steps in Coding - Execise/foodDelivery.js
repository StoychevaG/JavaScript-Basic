function foodDelivery (chickens, fish, vegan) {
/**•	Брой пилешки менюта – цяло число в интервала [0 … 99]
•	Брой менюта с риба – цяло число в интервала [0 … 99]
•	Брой вегетариански менюта – цяло число в интервала 
 */
let priceChicken = chickens * 10.35;
let priceFish = fish * 12.40;
let priceVegan = vegan * 8.15;
let allFood = priceChicken + priceFish + priceVegan;
let dessert = allFood * 0.20;
let delivery = 2.50;
let totalPrice = allFood + dessert + delivery;
console.log(totalPrice)


}
foodDelivery (2, 4, 3);
