const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values

for (property in Object.values(person)) {

  console.log(`${Object.values(person)[property]}`)

}