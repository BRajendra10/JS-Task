// wap to create calculator using switch case and function.

function add(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

function mul(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

function sub(num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

function div(num1, num2) {
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

let n1 = prompt("Enter a number: ");
let n2 = prompt("Enter a number: ");
let key = prompt("Enter you choice +, -, *, / : ");

n1 = parseInt(n1);
n2 = parseInt(n2);

switch (key) {
  case "+":
    add(n1, n2);
    break;
  case "-":
    sub(n1, n2);
    break;
  case "*":
    mul(n1, n2);
    break;
  case "/":
    div(n1, n2);
    break;
  default : console.log(`${key} Enter valid choise `);
}
