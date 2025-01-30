//wap to find if given number is divisable by 7 or not.

let num = prompt("Enter a number: ");

num = parseInt(num);

if(num %7 == 0) {
    console.log(`${num} is divisable by 7.`);
}
else {
    console.log(`${num} is not divisable by 7.`);
}