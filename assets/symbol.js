function sum() {
   const arrFromArgs = [...arguments];
   return arrFromArgs.reduce((accum, item) => accum + item);
}

/////////////////////

console.log(sum(1, 2, 3, 4, 5, 6, 7));

const arr1 = [1, 2, 3, 4, 5];
console.log(sum(...arr1));

/////////////////////////

const arr = [1, 2, 3];
const arrCopy = [...arr];
console.log(sum(arrCopy));

///////////////////

//злиття об'єктів
const user1 = { firstName: 'John', lastName: 'Doe' };
const user2 = { isMale: true, age: 30 };

let user3 = { ...user1, ...user2 };
console.log(user3);

//зміна властивості об'єкта
const newName = 'Andrew';
user3 = { ...user3, firstName: newName };
console.log(`змінене ім'я`, user3);

//////////////////////////

const users = [{ id: 1, firstName: 'Wadim', lastName: 'Gogli' }];
