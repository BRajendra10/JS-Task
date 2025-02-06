// wap to print only odd numbers using for/while/do..while loop.
// solving question using while loop.

let n = prompt("Enter a number: ");
n = parseInt(n);

let i = 1;
while(i <= n) {
    if(i %2== 0) {
        console.log(i);
    }

    i++;
}