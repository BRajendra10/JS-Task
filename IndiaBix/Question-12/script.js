// Look at this series: 14, 28, 20, 40, 32, 64, ... 

let n = 14;

for(let i = 1; i <= 5; i++) {
    console.log(n);
    n*=2;
    console.log(n);
    n-=8;
}