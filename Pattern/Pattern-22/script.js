// A
// B C
// D E F
// G H I J
// K L M N O

let x ="ABCDEFGHIJKLMNO"
let y = 0;

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        document.write(x[y] + " ");
        y++;
    }
    document.write('<br>');
}