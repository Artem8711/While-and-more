//Array - впорядковані колекції даних

/* const arr1 = new Array();
const arr2 = Array();
const arr3 = []; // найпоширеніший спосіб створення масиву
 */
const users = [
   { id: 1, name: `Test` },
   { id: 2, name: `Test2` }
];

/* console.log('users Масив', users);
console.log('users-кількість елементів', users.length); */

//////////////////////////

const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень'];
console.log(months);

/////////////////////

//Перебір Об'єктів циклами

for (let i = 0; i < months.length; i++) {
   console.log(months[i]);
}

document.write(`<ul>`);

for (let i = 0; i < months.length; i++) {
   document.write(`<li>${months[i]}</li>`);
}

document.write(`</ul>`);

//////////////////////////////

document.write(`<ul>`);

for (let i = 0; i < users.length; i++) {
   document.write(`<li>${users[i].id} ${users[i].name} </li>`);
}

document.write(`</ul>`);

//////////////////////////////

//Методи масивів----------------------------------------------

const numbers3 = [10, 20, 30]; /* 
numbers3[3] = 40; // додавання елемента в кінець масиву */
numbers3.push(40); // додавання елемента в кінець масиву
console.log(numbers3);

/* const elementCount = +prompt(`Input count:`);
const elements = [];

for (let i = 0; i < elementCount; i++) {
   const elem = +prompt(`Input element`);
   elements.push(elem);
   console.log(elements);
}
 */

//////////////////////////////////////////

const removeElement = numbers3.pop(); // видалення останнього елемента з масиву

numbers3.shift(); // видалення першого елемента з масиву
numbers3.unshift(50); // додавання елемента на початок масиву

//////////////////////////////////////

//копіювання масиву

const numbers4 = [100, 200, 300, 400];

const numbersCopy = numbers4.slice(); // створює поверхневу копію масиву

// Видалення елементів з масиву
numbers4.splice(2, 1); // видаляє 2 елементи з масиву, починаючи з індексу 1

//Методи перебору масивів
