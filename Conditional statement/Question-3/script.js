// wap to check if given number is positive number or negative number or 0.

let num = prompt("Enter a number: ");

num = parseInt(num);

if(num < 0) {
    console.log(`${num} is a negative number.`);
}
else if(num == 0) {
    console.log(`${num} is 0`);
}
else {
    console.log(`${num} is a positive number.`);
}