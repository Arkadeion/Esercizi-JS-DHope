// Questa prima versione elimina direttamente i parametri num1, num2, num3 e li sostituisce con un rest operator, per poi sommarli con un reduce.

function sum(...rest) {
  return rest.reduce( function (a, b) {
    return a + b;
}, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(...numbers));


// Questa versione aggiunge il rest ed il reduce senza eliminare i 3 parametri definiti dal testo iniziale dell'esercizio.

/* function sum(num1, num2, num3, ...rest) {
  return num1 + num2 + num3 + rest.reduce( function (a, b) {
    return a + b;
}, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(...numbers)); */