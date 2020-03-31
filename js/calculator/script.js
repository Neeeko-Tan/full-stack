var calculator = {
  displayValue: '0',
  currentOperator: null,
  leftOperand: null,
  waitingSecondOperand: false,
}

function bindKeyPress() {
  var keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', function(event){
    //console.log(event);
    var target = event.target;
    var value = target.value;
    //console.log(value);
    //calculator.displayValue = value;

    if (target.classList.contains("operator")){
      handleOperator(target.value);
      return;
    }
    if (target.classList.contains("decimal")){
      handleDecimal();
      return;
    }
    if (target.classList.contains("equal")){
      handleEqual();
      return;
    }
    if (target.classList.contains("clear")){
      handleClear();
      return;
    }

    handleDigit(value);

  });
}

function handleDigit(value) {
  var displayValue = calculator.displayValue;
  if (calculator.waitingSecondOperand) {
    calculator.displayValue = value;
    calculator.waitingSecondOperand = false;
  }else{
    calculator.displayValue = 
    displayValue === "0"? value:displayValue + value;
  }
  updateDisplay();
}

function updateDisplay(){
  var screen = document.querySelector('.calculator-screen');
  console.dir(screen);
  screen.value = calculator.displayValue;
  //screen.setAttribute('value', value);
}

function handleOperator(operator) {
  if (calculator.currentOperator) {
    if (calculator.waitingSecondOperand) {
      calculator.currentOperator = operator;
      return;
    }
    handleEqual();
  }
  calculator.currentOperator = operator;
  calculator.waitingSecondOperand = true;
  calculator.leftOperand = calculator.displayValue;
  calculator.displayValue = "0";
}

function handleEqual() {
  if (!calculator.currentOperator || calculator.waitingSecondOperand){
    return;
  }
  var leftOperand = parseFloat(calculator.leftOperand);
  var rightOperand = parseFloat(calculator.displayValue);
  var answer;
  switch (calculator.currentOperator) {
    case "+":
      answer = leftOperand + rightOperand;
      break;
    case "-":
      answer = leftOperand - rightOperand;
      break;
    case "*":
      answer = leftOperand * rightOperand;
      break;
    case "/":
      answer = leftOperand / rightOperand;
      break;
    default:
      return;
  }
  calculator.displayValue = "" + answer;
  calculator.currentOperator = null;
  calculator.waitingSecondOperand = false;
  updateDisplay();
}

function handleClear() {
  calculator.displayValue = "0";
  calculator.currentOperator = null;
  calculator.leftOperand = null;
  updateDisplay();
}

function handleDecimal(){
  if(calculator.displayValue.includes(".")){
    return;
  }
  calculator.displayValue += ".";
  calculator.waitingSecondOperand = false;
  updateDisplay();
}

bindKeyPress();

