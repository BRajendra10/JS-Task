// Look at this series: 8, 6, 9, 23, 87 , ... 

let n = 8;

for(let i = 1; i <= 10; i ++) {
    console.log(n);
    n = n * i - (i+1);
}