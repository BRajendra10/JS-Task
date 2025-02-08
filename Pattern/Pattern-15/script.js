// Pattern

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

let count = 1;

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        count++;
        if(count %2== 0){
            document.write(1 + " ");
        } else {
            document.write(0 + " ");
        }
        // document.write(count + " ");
    }
    document.write('<br>');
}