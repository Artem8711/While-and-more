class Squirrel {
   constructor(name) {
      this._name = name;
   }
   eat(food) {
      console.log(`Squirrel ${this._name} is eating ${food}.`);
   }
   run() {
      console.log(`Squirrel ${this._name} is running.`);
   }
}

class FlyungSquirrel extends Squirrel {
   constructor(name, length) {
      super(name);
      this._length = length;
   }
   eat() {
      console.log(`Flying Squirrel ${this._name} is eating nuts.`);
   }
   fly() {
      console.log(`Flying Squirrel ${this._name} is flying for ${this._length} meters.`);
   }
}

const sq = new Squirrel(`Natasha`);
sq.eat(`acorns`);
sq.run();

const fsq = new FlyungSquirrel(`007`, 3);

fsq.eat();
fsq.fly();
