// wap to check if given number is prime or not

function checkPrimeNumber(num) {
    if(num < 1) {
        isPrime = false;
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num%i==0) {
            isPrime = false
        }
    }

    if(isPrime == true) {
        console.log(`${num} is a prime number`);
    }
    else {
        console.log(`${num} is not a prime number`);
    }
}

let isPrime = true;

let n = prompt("Enter a number: ");
n = parseInt(n);

checkPrimeNumber(n);