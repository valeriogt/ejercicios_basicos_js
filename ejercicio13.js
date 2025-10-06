function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);
  if (index !== -1) {
    return { found: true, position: index };
  } else {
    return false;
  }
}

// Prueba con el array de ejemplo:
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

// Ejemplo de uso:
console.log(nameFinder(names, 'Logan')); // { found: true, position: 5 }
console.log(nameFinder(names, 'Pepito')); // false
