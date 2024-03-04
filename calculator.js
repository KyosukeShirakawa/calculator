var displayValue = document.querySelector('.display');


function operate(a, b, ope) {
  var num1 =a;
  var num2 =b;
  var operator = ope;

  switch(operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return "No operator found";
  }
}
console.log(operate(1, 2, '+'));
console.log(operate(1, 2, '-'));
console.log(operate(1, 2, '*'));
console.log(operate(1, 2, '/'));

function add(num1, num2) {
  return num1+num2;
}
function subtract(num1, num2) {
  return num1-num2;
}
function multiply(num1, num2) {
  return num1*num2;
}
function divide(num1, num2) {
  return num1/num2;
}