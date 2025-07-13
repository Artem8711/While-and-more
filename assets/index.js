let sideCount = 1;
const SIDE_AMOUNT = 4;

while (sideCount <= SIDE_AMOUNT) {
   console.log(`Пройти прямо`);
   console.log(`Повернути наліво`);
   //sideCount = sideCount + 1;
   // sideCount += 1;
   sideCount++;
}

/* Робота з циклами */

let i = 1;
let sum = 0;

while (i <= 20) {
   sum = sum + i;
   i++;
   console.log(i);
}
console.log(sum);

/* краткий роспис */

// i = 1;
// i <= 20 (true);
// (i++) = i + 1 = 1 + 1 = 2 и тд до 20;
