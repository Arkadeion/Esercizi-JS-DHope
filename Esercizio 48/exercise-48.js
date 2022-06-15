const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName: name, lastName: surname, age: old } = person;

console.log(person.firstName, person.lastName, person.age); //console.log aggiunto solo per controllare che i nomi delle chiavi di person siano rimasti gli stessi
console.log(id, name, surname, old);