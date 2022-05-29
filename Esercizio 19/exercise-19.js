const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon'; /*  Scrivendo person2 = person1 non stiamo assegnando i dati a person2, ma stiamo facendo puntare person2 all'oggetto person1, 
quindi cambiando l'uno cambia necessariamente anche l'altro.
 */
console.log(person1);
console.log(person2);