const product1 = 15.678;
const product2 = 123.965;
const product3 = 90.2345;
const productsArr = [product1, product2, product3];
console.log(productsArr);

const maxPrice = Math.max(...productsArr);
const minPrice = Math.min(...productsArr);
console.log("max: " + maxPrice + ", min: " + minPrice);

let sumOfPrice = 0;
for (let i = 0; i < productsArr.length; i++) {
    sumOfPrice += productsArr[i];
}
console.log("sum: " + sumOfPrice);

let productsArrFloored = [];
let sumOfPriceFloored = 0;
for (let i = 0; i < productsArr.length; i++) {
    productsArrFloored[i] = productsArr[i];
    productsArrFloored[i] = Math.floor(productsArrFloored[i]);
    sumOfPriceFloored += productsArrFloored[i];
}
console.log(Math.round(sumOfPriceFloored / 100) * 100);

console.log(sumOfPriceFloored, sumOfPriceFloored % 2 === 0);

const payment = 500;
const balance = payment - sumOfPrice;
console.log("решта: " + balance);

const average = sumOfPrice / productsArr.length;
console.log(Math.round(average * 100) / 100);
///////////////////////
const min = 0;
const max = 95;
const rd = Math.round((max - min) * Math.random() + min);
const discount = (Math.round(rd / 5) * 5) / 100;
console.log(discount);

const balance2 = Math.round((sumOfPrice - (sumOfPrice * discount)) * 100) / 100;
console.log(balance2);

const clearEarning = sumOfPriceFloored / 2 - sumOfPriceFloored * discount;
console.log(clearEarning);

console.log(`Максимальна ціна: ${maxPrice}.\nМінімальна ціна: ${minPrice}.\nВартість всіх товарів: ${sumOfPrice}.\nОкруглена вартість товарів: №1 - ${productsArrFloored[0]}, №2 - ${productsArrFloored[1]}, №3 - ${productsArrFloored[2]}.\nСума до сотень: ${Math.round(sumOfPriceFloored / 100) * 100}.\nЧи сума є парним числом: ${sumOfPriceFloored % 2 === 0}.\nСуму решти: ${balance}.\nСереднє значення цін, округлене до другого знаку: ${Math.round(average * 100) / 100}.\nРандомна знижка (%): ${discount}.\nСуму до оплати із знижкою (+округоення): ${balance2}.\nЧистий прибуток: ${clearEarning}.`)