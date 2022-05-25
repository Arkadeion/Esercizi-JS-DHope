function canPlay() {
  const personName = 'Paul'; 
  /* Usando const per l'assegnazione della variabile al posto di let, il valore con cui è stata 
  inizializzata non può essere modificato ulteriormente. */

  if (true) {
    personName = 'George'; 
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();