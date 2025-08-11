const user = {
   firstName: `Vadim`,
   lastName: `Pisunov`
};

for (const key in user) {
   console.log(` user [${key}] = ${user[key]}`);
}

const arr = [1, 2, 3, 4, 5];

for (const index in arr) {
   console.log(` arr [${index}] = ${arr[index]}`);
}

///////////////////////////////////

function User1(name, surname, age, isMale, email, isSubscribed) {
   this.firstName = name;
   this.lastName = surname;
   this.age = age;
   this.isMale = isMale;
   this.email = email;
   this.isSubscribed = isSubscribed;
}

User1.prototype.getFullName = function () {
   return `${this.firstName} ${this.lastName}`;
};

const user1 = new User1('test', 'test2', 20, true, 't@g.com', true);

/* for (const key in user1) {
   console.log(` user1 [${key}] = ${user1[key]}`);
} */

//1

for (const key in user1) {
   if (user1.hasOwnProperty(key)) {
      console.log('key own', key);
   }
}

//2

console.log(Object.keys(user1)); // ['firstName', 'lastName', 'age', 'isMale', 'email', 'isSubscribed']
