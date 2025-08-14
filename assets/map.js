const map1 = new Map();
console.log(map1);
console.log('map1.size', map1.size);

const user = { id: 1, name: 'Ivo' };
//obj.key = value
map1.set(`firstName`, `Test1`).set(`lastName`, `Test2`);
map1.set(user, 'значение для user');
//obj.key

console.log(map1.get(`firstName`));
console.log(map1.get(user));

////////////////////////////

const vocabluary = new Map();
vocabluary.set(`dog`, `собака`).set(`cat`, `кіт`).set(`run`, `бігати`);

function translateEngToUa(engPhrase) {
   const engWords = engPhrase.split(` `);
   //
   const uaWords = engWords.map((w) => (vocabluary.has(w) ? vocabluary.get(w) : w));
   //
   const uaPhrase = uaWords.join(`, `);
   return uaPhrase;
}

const engPhrase = `dog run white cat`;
const ukrPhrase = translateEngToUa(engPhrase);
