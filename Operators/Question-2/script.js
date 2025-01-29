// wap to swap two values from variables without using third variable.

let x = prompt("Enter x: ");
let y = prompt("Enter y: ");

x = parseInt(x);
y = parseInt(y);

x = x + y;
y = x - y;
x = x - y;

document.write(x, y);