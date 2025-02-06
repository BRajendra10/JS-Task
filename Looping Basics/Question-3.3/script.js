// wap to print only odd numbers using for/while/do..while loop.
// solving question using do-while loop.

let n = prompt("Enter a number: ");
n = parseInt(n);

let i = 1;
do {
    if(i %2== 0) {
        console.log(i);
    }

    i++;
} while(i <= n);