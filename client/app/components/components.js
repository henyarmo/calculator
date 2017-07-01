import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Calculator from './calculator/calculator';

let componentModule = angular.module('app.components', [
  Calculator
])

.name;

export default componentModule;
