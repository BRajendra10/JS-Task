// 1  2  3  4  5  
// 16 17 18 19 6  
// 15 24 25 20 7  
// 14 23 22 21 8  
// 13 12 11 10 9  

let num = 1;

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 5; j++) {
        document.write(`${num} `);
        num++;
    }
    document.write('<br>');
}