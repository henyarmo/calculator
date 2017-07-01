import CalculatorModule from './calculator';
import CalculatorController from './calculator.controller';
import CalculatorComponent from './calculator.component';
import CalculatorTemplate from './calculator.html';

describe('Calculator', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CalculatorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CalculatorController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs

    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });

    it('has a values property', () => {
      let controller = makeController();
      expect(controller).to.have.property('values');
    });

    it('add functionality', () => {
      let controller = makeController();
      expect(controller.add(1,3)).to.equal(4);
    });

    it('subtract functionality', () => {
      let controller = makeController();
      expect(controller.subtract(18,3)).to.equal(15);
    });

    it('multiply functionality', () => {
      let controller = makeController();
      expect(controller.multiply(6,3)).to.equal(18);
    });

    it('divide functionality', () => {
      let controller = makeController();
      expect(controller.divide(6,3)).to.equal(2);
    });

    it('doCalculations functionality', () => {
      let controller = makeController();
      controller.doCalculations('+',6,3);
      expect(controller.result).to.equal(9);
    });

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}

  });

  describe('Component', () => {
    // component/directive specs
    let component = CalculatorComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CalculatorTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CalculatorController);
    });
  });

});
