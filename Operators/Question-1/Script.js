// wap to swap two values of the variable.

let x = prompt("Enter x: ");
let y = prompt("Enter y: ");

x = parseInt(x);
y = parseInt(y);

let temp = x;
x = y;
y = temp;

document.write(x,y);
