class Square {
  constructor(side, shapeName = "square") {
    this.side = side;
    this.shapeName = shapeName;
  }
}

class Rectangle {
  constructor(width, height, shapeName = "rectangle") {
    this.width = width;
    this.height = height;
    this.shapeName = shapeName;
  }
}

class Circle {
  constructor(radius, shapeName = "circle") {
    this.radius = radius;
    this.shapeName = shapeName;
  }
}

class AreaCalculator {

  static calculate(shape) {
    switch (shape.shapeName) {
      case ("square"):
        return Number(shape.side * shape.side.toFixed(2)); // .toFixed(2) arrotonda il risultato a due decimali, ma trasforma il valore in stringa. 
      case ("rectangle"): // La classe Number converte nuovamente il risultato in un numero.
        return Number((shape.width * shape.height).toFixed(2));
      case ("circle"):
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