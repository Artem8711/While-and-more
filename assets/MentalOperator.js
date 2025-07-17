const summand1 = 4;
const summand2 = 5;

//тяжелая пропись кода
console.log(String(summand1) + `+` + String(summand2) + `=` + String(summand1 + summand2));

//легкая пропись кода
/* console.log(`summand1: ${summand1}`); */
console.log(`${summand1} + ${summand2} = ${summand1 + summand2}`);

//Task

/* const greeting = `Hello`;
const userName = prompt(`Enter your name:`);
console.log(`${greeting}, ${userName}!`); */

/////////////////////

//не оптимимизированный код

/* const TRY_LIMIT = 3;
const PASSWORD_PATTERN = `qwerty`;

let currentTry = 1;
let password = ``;

do {
   password = prompt(`Enter your password:`);
   if (password === PASSWORD_PATTERN) {
      break;
   }
   currentTry++;
} while (currentTry <= TRY_LIMIT);

if (password === PASSWORD_PATTERN) {
   console.log(`Password is correct!`);
} else {
   console.log(`Password is incorrect!`);
} */

//оптимизированный код
const TRY_LIMIT = 3;
const PASSWORD_PATTERN = `qwerty`;
let currentTry = 1;
let password = ``;

let isPasswordCorrect = false;
do {
   isPasswordCorrect = prompt(`Enter your password:`) === PASSWORD_PATTERN;
} while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

if (isPasswordCorrect) {
   console.log(`Password is correct!`);
} else {
   console.log(`Password is incorrect!`);
}
k;
