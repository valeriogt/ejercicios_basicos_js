function sumNumbers(numberList) {
  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  return suma;
}

// Prueba con el array de ejemplo:
const numbers = [1, 2, 3, 5, 45, 37, 58];
console.log(sumNumbers(numbers)); // Muestra: 151
