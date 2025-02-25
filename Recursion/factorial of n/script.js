// factorial of n

function factorial(num) {
    if(num > 1) {
        return num * factorial(num-1);
    } else {
        return 1;
    }
}

let n = prompt("Enter a number: ");
n = parseInt(n);

console.log(factorial(n));