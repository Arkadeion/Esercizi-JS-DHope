function calculateAverageAge(persons) {

  let sum = 0;

  let averageAge;

  let i = 0;
  
  do {
    sum = sum + persons[i].age;
    i++;
  } while (i < persons.length);

  averageAge = sum / persons.length;

  return averageAge;
}

// Avrei potuto farlo con for o forEach come gli esercizi precedenti, ma volevo provare a risolverlo con un ciclo do while.

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);