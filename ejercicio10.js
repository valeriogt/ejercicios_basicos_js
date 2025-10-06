function average(numberList) {
  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  return suma / numberList.length;
}

// Prueba con el array de ejemplo:
const numbers = [12, 21, 38, 5, 45, 37, 6];
console.log(average(numbers)); // Muestra: 23.428571428571427
