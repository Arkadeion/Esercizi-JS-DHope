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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    if (typeof id === 'number' && id > 0 && id <= persons.length) {
    setTimeout(() => resolve(persons.find(item => item.id === id)), 1000);
  } else {
    reject(new Error('This is not a valid id.'));
  }
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    if (typeof id === 'number' && id > 0 && id <= persons.length) {
    setTimeout(() => resolve(jobs.find(item => item.id === id)), 500);
  } else {
    reject(new Error('This is not a valid id.'));
  }
  });
}

let id = 3;

Promise.race([fetchPersonById(id), fetchJobById(id)]).then((id) => {
  console.log(id);
})
