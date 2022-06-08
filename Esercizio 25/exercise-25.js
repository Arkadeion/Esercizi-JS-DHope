const person = {

  get aFirstName() {
    return this._firstName;
  },

  get aLastName() {
    return this._lastName;
  },

  set firstName(name) {
    this._firstName = name;
  },

  set lastName(surname) {
    this._lastName = surname;
  },

  _firstName: "",

  _lastName: "",

  fullName()  {
    return `${this._firstName} ${this._lastName}`
  }
}

const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins