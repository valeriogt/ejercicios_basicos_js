function removeDuplicates(list) {
  let uniqueArray = [];
  for (let i = 0; i < list.length; i++) {
    if (!uniqueArray.includes(list[i])) {
      uniqueArray.push(list[i]);
    }
  }
  return uniqueArray;
}

// Prueba con el array de ejemplo:
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

console.log(removeDuplicates(duplicates));
// Resultado esperado: ["sushi", "pizza", "burger", "potatoe", "pasta", "ice-cream", "chicken", "onion rings", "soda"]
