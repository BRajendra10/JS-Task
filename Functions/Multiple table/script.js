// printing multiple table using function

function table(n) {
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= 10; j++) {
            document.write(`${i} * ${j} = ${i*j} <br>`);
        }
        document.write('<br>');
    }
}

let num = prompt("Enter a number: "); 

table(num);