// WAP to print the table given number from user

function table(n) {
    for(let i = 1; i <= 10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

let num = prompt("Enter a number: "); 

table(num);