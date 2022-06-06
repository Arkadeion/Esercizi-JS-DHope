class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {

  static calculate(shape) {
    switch (shape) {
      case square:
        return Number(shape.side * shape.side.toFixed(2)); // .toFixed(2) arrotonda il risultato a due decimali, ma trasforma il valore in stringa. 
      case (rectangle): // La classe Number converte nuovamente il risultato in un numero.
        return Number((shape.width * shape.height).toFixed(2));
      case (circle):
        return Number((Math.PI * shape.radius).toFixed(2)); 
      default:
        return 'Incorrect input. This is not a compatible shape.'
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
console.log(AreaCalculator.calculate('triangle'));