function canPlay() {

  let personName = 'Paul'; 
  /*  Perché personName sia visibile da "personName += ' plays football';" all'interno di questa funzione, 
  bisogna portarli allo stesso scope. */

  personName += ' plays football'; 

  console.log(personName);
}

canPlay();