// check number is palindrom or not.

let num = prompt("Enter a number: ");
let revNum = 0;

for(let i = num.length-1; i >= 0; i--) {
    revNum += num[i];
}

revNum = parseInt(revNum);

if(revNum == num) {
    console.log(`${num} is a palindrom number`);
} else {
    console.log(`${num} is not a palindrom number`);
}