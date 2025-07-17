function myFunction(userName) {
   console.log(`hello, ${userName}`);
}

myFunction(`Artem`);

myFunction(`David`);

///////////////

function sum(par1, par2) {
   return par1 + par2;
}

const result = sum(4, 5);
console.log('result', result);

//////////////////////////(

const clacSum = function (a, b) {
   return a + b;
};

console.log(clacSum(10, 20));
