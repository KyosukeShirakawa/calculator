const display = document.querySelector('.display');
const numBtn = document.querySelectorAll('.number-button');
const clrBtn = document.querySelector('.clear-btn');
const addBtn = document.querySelector('.add-btn');
const subtBtn = document.querySelector('.subt-btn');
const multBtn = document.querySelector('.mult-btn');
const diviBtn = document.querySelector('.divi-btn');
const equalBtn = document.querySelector('.equal-btn');

var displayedValue = '';
var firstNum = '';
var secondNum = '';
var operator = '';


// event listener for the buttons
numBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
     displayedValue += btn.textContent;
    display.innerHTML = displayedValue;
  })
});

clrBtn.addEventListener( 'click', () => {
  displayedValue = '';
  display.innerHTML = displayedValue;

});

addBtn.addEventListener('click', () => {
  operator = addBtn.textContent;
  firstNum = parseInt(displayedValue);
  displayedValue += operator;
  display.innerHTML = displayedValue;
});
subtBtn.addEventListener('click', () => {
  operator = subtBtn.textContent;
  firstNum = parseInt(displayedValue);
  displayedValue += operator;
  display.innerHTML = displayedValue;

});
multBtn.addEventListener('click', () => {
  operator = multBtn.textContent;
  firstNum = parseInt(displayedValue);
  displayedValue += operator;
  display.innerHTML = displayedValue;

});
diviBtn.addEventListener('click', () => {
  operator = diviBtn.textContent;
  firstNum = parseInt(displayedValue);
  displayedValue += operator;
  display.innerHTML = displayedValue;

});

equalBtn.addEventListener('click', () => {

  secondNum = parseInt(displayedValue.substring((displayedValue.indexOf(operator)-1, displayedValue.length-1)))
  //console.log(`second num is ${secondNum}`);
  var result = operate(firstNum, secondNum, operator);
  display.innerHTML = result;
  displayedValue = result;
  firstNum = result;
  secondNum = '';


  console.log(`first num: ${firstNum}, second num: ${secondNum}, displayedValue: ${displayedValue}`);






});




// Calculator logic
function operate(a, b, ope) {
  num1 =a;
  num2 =b;

  switch(ope) {
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


function add(a, b) {
  return a+b;
}
function subtract(a, b) {
  return a-b;
}
function multiply(a, b) {
  return a*b;
}
function divide(a, b) {
  return a/b;
}