// Look at this series: 80, 10, 70, 15, 60, ...

let num1 = 80;
let num2 = 10;

for(let i = 1; i <= 5; i++) {
    console.log(num1);
    console.log(num2);
    
    num1-=10;
    num2+=5;
}