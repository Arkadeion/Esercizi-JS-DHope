const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

let values = Object.keys(person).map((key) => [key, person[key]]);
console.log(values);
