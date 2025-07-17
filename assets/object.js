/* Об'єкти */

/* const firstName = `Test`;
const lastName = `Testov`;

const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

console.log(obj1);
//alert(obj1); //не підтримується */

//Ініціалізація об'єктів

/* //key: value
const user = {
   firstName: `Test`,
   lastName: `Testov`,
   age: 25,
   password: `12345`
};
console.log('user', user); */

/* //Додавання властивостей
user.email = `test@gmail.com`;
console.log('user', user);

//Видалення властивостей
delete user.password;
console.log('user', user); */

/* Task: */

/* const car = {
   brand: `BMW`,
   model: `X5`,
   year: 2020,
   color: `black`,
   number: `AA1234BB`
};
console.log('car', car);

car.color = `white`;
delete car.number;
car.owner = `John Doe`;
console.log('car', car);
*/

///////////////////////////

/* const user = {
   firstName: `Test`,
   lastName: `Testov`,
   age: 25,
   password: `12345`
}; */
//////////////////////////
/* 
const numberValue1 = 5;
const numberValue2 = 5; */
/* console.log(numberValue1 === numberValue2); // true */

//

/* const objValue1 = {};
const objValue2 = {}; */
/* console.log(objValue1 === objValue2); // false */

///////////////////////////

/* const user1 = user;

user1.firstName = `John`; */
/* console.log('user1', user1); */

//////////////////

/* //Копіювання об'єктів
const user2 = Object.assign({}, user);
console.log('user2', user2);
console.log(user2 === user); // false

//спосіб 2
const user3 = { ...user };
console.log(user3 === user); //false
 */

/* Методи об'єкту */

/* const user = {
   firstName: `Test`,
   lastName: `Testov`,
   age: 25,
   password: `12345`,
   //Методи
   getFullName: function () {
      console.log(this === user); // true
      return `${this.firstName} ${this.lastName}`;
   },
   changePassword: function (newPassword) {
      this.password = newPassword;
   }
}; */

/* const userFullName = user.getFullName();
console.log(userFullName); */

/* user.changePassword(`09876`);
console.log('user', user); */

//////////////////////

//скороченна форма запису верньохо об'єкту

const user = {
   firstName: `Test`,
   lastName: `Testov`,
   age: 25,
   password: `12345`,
   getFullName() {
      return `${this.firstName} ${this.lastName}`;
   },
   changePassword(newPassword) {
      this.password = newPassword;
   }
};

const userFullName = user.getFullName();
console.log(userFullName);

user.changePassword(`09876`);
console.log('user', user);
