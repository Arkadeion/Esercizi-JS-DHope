function adultFilter(persons) {

  var adultCounter = [];

  persons.forEach(element => {
      if (element.age >= 18) {
      adultCounter.push(element);
    }
  });

  return adultCounter;
}

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

const adults = adultFilter(persons);
console.log(persons);
debugger // Ho aggiunto debugger soltanto per verificare il contenuto degli array in VSCode
console.log(adults);
debugger // Ho aggiunto debugger soltanto per verificare il contenuto degli array in VSCode