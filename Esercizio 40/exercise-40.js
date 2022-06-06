class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get getFirstName() {
    return this.firstName;
  }

  get getLastName() {
    return this.lastName;
  }

  get getAge() {
    return this.age;
  }

  set changeFirstName(newFirstName) {
    this.firstName = newFirstName;
  }

  set changeLastName(newLastName) {
    this.lastName = newLastName;
  }

  set changeAge(newAge) {
    this.age = newAge;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName());
console.log(person.age);

person.changeFirstName = 'Maria';
person.changeLastName = 'Verdi';
person.changeAge = 32;
console.log(person.fullName());
console.log(person.age);