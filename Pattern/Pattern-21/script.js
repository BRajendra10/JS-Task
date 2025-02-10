// A
// A B
// A B C
// A B C D
// A B C D E

let x = "ABCDE"

for(let i = 0; i <= 4; i++) {
    for(let j = 0; j <= i; j++) {
        document.write(x[j] + " ");
    }
    document.write('<br>');
}