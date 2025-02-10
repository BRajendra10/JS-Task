// Pattern

// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1

for(let i = 5; i >= 1; i--) {
    for(let j = 1; j <= i; j++) {
        document.write(i + " ");
    }
    document.write('<br>');
}