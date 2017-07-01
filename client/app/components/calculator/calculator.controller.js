class CalculatorController {

  constructor() {
    this.name = 'calculator';

    this.values = {
      first: 0,
      second: 0
    };

    this.result = 0;
    this.sign = '+';

  }

  doCalculations(sign, a, b) {

    switch (sign) {
      case '+':
        this.result = this.add(a, b);
        break;
      case '-':
        this.result = this.subtract(a, b);
        break;
      case '*':
        this.result = this.multiply(a, b);
        break;
      case '/':
        this.result = this.divide(a, b);
        break;
    }
  };



  add(a, b){
    return a + b;
  };

  subtract(a, b){
  return a - b;
  };

  multiply(a, b){
    return a * b;
  };

  divide(a, b){
    return a / b;
  };
}
 export default CalculatorController;
