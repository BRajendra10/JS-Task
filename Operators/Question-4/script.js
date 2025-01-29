// wap to peform all methmetical operations.

let x = prompt("Enter x: ");
let y = prompt("Enter y: ");

x = parseInt(x);
y = parseInt(y);

let sum = x + y;
document.write(`sum of ${x} + ${y} = ${sum}`);

let sub = x - y;
document.write(`substraction of ${x} - ${y} = ${sub}`);

let mul = x * y;
document.write(`multiplication of ${x} * ${y} = ${mul}`);

let div = x / y;
document.write(`division of ${x} / ${y} = ${div}`);

let rem = x % y;
document.write(`remainder of ${x} % ${y} = ${rem}`);