class User {
   constructor(fullName) {
      [this._firstName, this._lastName] = fullName.split(' ');
   }
   set fullName(v) {
      [this._firstName, this._lastName] = v.split(' ');
   }
   get fullName() {
      return this._firstName + ' ' + this._lastName;
   }
}

const user = new User(`Иван Иванов`);
user.fullName = `Петр Петров`;
