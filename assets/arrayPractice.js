/* Этот файл про рядки а не практику */
/* Рядки це псевдо массиви4 */

/* const str = `qwerty`;
console.log(str.length);
console.log(str[0]);

const str1 = str.slice(0, 5) + `q`; */

function getInitials(name) {
   const spaceIndex = name.indexOf(' ');
   console.log(spaceIndex);
   return (name[0] + name.slice(spaceIndex + 1, spaceIndex + 2)).toUpperCase();
}

const initials = getInitials(`Стасюк Артем`);
console.log(initials);
