let pattern = [];
let n = 10;
let num = 1;

// 1
for (let i = 0; i < n; i++) {
    pattern.push([]);
    for(let j = 0; j < n+n-1; j++){
        pattern[i].push('-');
    }
}

// 2
for(let i = 0; i < n; i++){
  for(let j = 0; j <= i; j++) {
    pattern[j][i] = num++;
  }
}

// 3
let k = n-1;
for(let i = n; i < n+n; i++){
  for(let j = 0; j < k; j++){
    pattern[j][i] = num++;
  }
  k--;
}


console.log(pattern);

// TODO: 
// when the user input the number acording to that pattern should be formed.
// make a array n*n
// print numbers acording to the given pattern using loop or anything nessesary.

// FIXME:
// i have made array so i have to focus on printing number.