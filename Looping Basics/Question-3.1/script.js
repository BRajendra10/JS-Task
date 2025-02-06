// wap to print only odd numbers using for/while/do..while loop.
// solving question for loop.

let n = prompt("Enter a number: ");
n = parseInt(n);

for(let i = 1; i <= n; i++) {
    if(i %2== 0) {
        console.log(i);
    }
}