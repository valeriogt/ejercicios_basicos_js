// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo cuando el resto del número dividido entre 2 sea 0.
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 1.3 Bucle para conseguir dormir contando ovejas.
for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log('Intentando dormir 🐑');
    } else {
        console.log('¡Dormido!');
    }
}
