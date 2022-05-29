function calculate() {
  return {
    result: 0,
    add: function (val) {
      this.result = this.result + val;
      return this;
    },
    sub: function (val) {
      this.result = this.result - val;
      return this;
    }, 
    multiply: function (val) {
      this.result = this.result * val;
      return this;
    },
    divide: function (val) {
      this.result = this.result / val;
      return this;
    },
    printResult: function () {
      console.log(this.result);
      return this;
    }
  }

}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7