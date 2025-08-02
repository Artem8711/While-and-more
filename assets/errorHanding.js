const a = 10;
console.log(a);

try {
   const c = a + b;
   console.log(`Hello after error`);
} catch (error) {
   console.log(error.message);
}

console.log(`hello `);
console.log(`hello `);
console.log(`hello `);
console.log(`hello `);
console.log(`hello `);
console.log(`hello `);
console.log(`hello `);

/* throw new Error(`message`);
console.log(`hello1`); */

//////////////////////////////////

function factorial(n) {
   if (typeof n !== 'number') {
      throw new Error(`n must be a number`);
   }
   if (n === 0) {
      return 1;
   }
   return n * factorial(n - 1);
}
try {
   console.log(factorial(`10`));
} catch (error) {
   console.log(error.message);
}

console.log(factorial(`10`));
console.log(`after error`);
