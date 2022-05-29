function pow(base) {
  let result;
  return function (esponente) {
    result = base;
    if (esponente > 0) {
      for (let i = esponente; i > 1; i--) {
        result = result * base;
      }
      return result;
    } else if (esponente === 0) { // Ho aggiunto degli if/else opzionali per risolvere anche le potenze di 1 e 0
      return 1; // Ho aggiunto degli if/else opzionali per risolvere anche le potenze di 1 e 0 e le potenze negative
    } else if (esponente < 0) { // Ho aggiunto degli if/else opzionali per risolvere anche le potenze di 1 e 0 e le potenze negative
      for (let i = esponente * -1; i > 1; i--) { // Ho aggiunto degli if/else opzionali per risolvere anche le potenze di 1 e 0 e le potenze negative
        result = result * base; // Ho aggiunto degli if/else opzionali per risolvere anche le potenze di 1 e 0 e le potenze negative
      } // Ho aggiunto degli if/else opzionali per risolvere anche le potenze di 1 e 0 e le potenze negative
      return 1 / result; // Ho aggiunto degli if/else opzionali per risolvere anche le potenze di 1 e 0 e le potenze negative
    }
  }
}

const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));
console.log(pow2(1)); // Aggiunto per testare le condizioni opzionali citate sopra
console.log(pow2(0)); // Aggiunto per testare le condizioni opzionali citate sopra
console.log(pow2(-1)); // Aggiunto per testare le condizioni opzionali citate sopra
console.log(pow2(-2)); // Aggiunto per testare le condizioni opzionali citate sopra
console.log(pow2(-3)); // Aggiunto per testare le condizioni opzionali citate sopra

console.log('--- Power of 5 ---');
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));
console.log(pow5(1)); // Aggiunto per testare le condizioni opzionali citate sopra
console.log(pow5(0)); // Aggiunto per testare le condizioni opzionali citate sopra
console.log(pow5(-1)); // Aggiunto per testare le condizioni opzionali citate sopra
console.log(pow5(-2)); // Aggiunto per testare le condizioni opzionali citate sopra
console.log(pow5(-3)); // Aggiunto per testare le condizioni opzionali citate sopra