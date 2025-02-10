// Patern

// 5
// 4 4
// 3 3 3
// 2 2 2 2
// 1 1 1 1 1

for(let i = 5; i >= 1; i--) {
    for(let j = 5; j >= i; j--) {
        document.write(i + " ");
    }
    document.write('<br>');
}