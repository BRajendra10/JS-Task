// wap to print only even numbers from Array.

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= x.length; i++) {
  if (x[i] % 2 == 0) {
    console.log(x[i]);
  }
}
