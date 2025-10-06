function repeatCounter(list) {
  const counts = {};

  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}

// Prueba con el array de ejemplo:
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

console.log(repeatCounter(words));
// Salida esperada: { code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2 }
