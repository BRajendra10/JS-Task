// WAP to Print the Fibonacci Sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


// Variable declaration and changing the data type into number.
let n3;

let n1 = prompt("Enter a number: ");
n1 = parseInt(n1);

let n2 = prompt("Enter a number: ");
n2 = parseInt(n2);

// Printing the first two Sequence
console.log(n1);
console.log(n2);

for(let i = 1; i <= 10; i++) {

    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;

    console.log(n3);
}