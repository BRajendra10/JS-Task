// wap to swap two values from two variable without using third variable and without using +,-

let x = prompt("Enter x: ");
let y = prompt("Enter y: ");

x = parseInt(x);
y = parseInt(y);

x = x * y;
y = x / y;
x = x / y;

console.log(x, y);