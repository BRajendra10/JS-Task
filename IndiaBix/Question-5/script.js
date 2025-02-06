// Look at this series: 53, 53, 40, 40, 27, 27, ...

let n = 53;

for(let i = 1; i <= 5; i++) {
    console.log(n, n);
    n-=13;
}