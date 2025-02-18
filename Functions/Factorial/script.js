// wap to print factorial of given number.

function factorial(num) {
    let factorial = 1;

    for(let i = num; i >= 1; i--) {
        factorial = factorial * i;
    }
    
    console.log(`factorial of ${num} = ${factorial}`);
}

let n = prompt("Enter anumber: ");
n = parseInt(n);

factorial(n);