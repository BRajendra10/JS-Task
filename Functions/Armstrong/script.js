// wap to chekc if given number is prime or not

function armstrong(nLength, num) {
    let sum = 0;

    for(let i = 1; i <= nLength; i++) {
        let x = n % 10;
        sum = sum + Math.pow(x, 3);

        n = n / 10;
        n = Math.floor(n);
    }

    if(num == sum) {
        console.log(`${num} is a armstrong number `);
    } else{
        console.log(`${num} is not a armstrong number `);
    }
}

let n = prompt("Enter a number: ");
let numLength = n.length;
n = parseInt(n);

armstrong(numLength, n);