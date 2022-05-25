const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student)
}

addStudent('Marco');
console.log(students);

/* Quando si assegna un array tramite const, si sta rendendo costante il riferimento a quell'array, non agli indici che contiene. */