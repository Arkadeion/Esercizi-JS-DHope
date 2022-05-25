function getKeys(obj) {
  
  let list = [];

  for (let q in person) list.push(q);

  return list;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);