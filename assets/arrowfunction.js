//arguments колекція для зберігання аргументів функції
/* function f() {
   console.log(arguments);
}
f(1, 2);

function sum() {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
   }
   return sum;
}

const sumOfArgs = sum(1, 2, 3, 4, 5, 6);
console.log(sumOfArgs);

//////////////////

function dob() {
   let dob = 1;
   for (let i = 0; i < arguments.length; i++) {
      dob *= arguments[i];
   }
   return dob;
}
const dobOfArgs = dob(1, 2, 3, 4, 5, 6);
console.log(dobOfArgs); */

/* Rest-paramaters */

function f(a, b, ...args) {
   console.log(args);
}

const res = f(1, 2, 3, 4, 5);
///////////////////
function sum(...summands) {
   function howToReduce(accumulator, item) {
      return accumulator + item;
   }
   const sum = summands.reduce(howToReduce);
   return sum;
}

const resl = sum(1, 2, 3, 4, 5, 6);
console.log(resl);
