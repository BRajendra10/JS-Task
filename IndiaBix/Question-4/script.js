// Look at this series: 22, 21, 23, 22, 24, 23, ...

let n = 22;

for(let i = 1; i <= 5; i++) {
    n--;
    console.log(n);
    n+=2;
    console.log(n);
}