const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof id === 'number' && id > 0 && id <= persons.length) {
        resolve(id);
      } else {
        reject(new Error('This is not a valid id.'))
      }
    }, 1000);
  });
}

fetchPersonById(2).then((id) => {
    console.log(persons[id-1]);
  })