// wap to print 1 to n using for/while/do..while loop.
// solving question using do-while loop.

let n = prompt("Enter a number: ");
n = parseInt(n);

let i = n;
do {
    console.log(i);

    i--;
} while(i >= 1);