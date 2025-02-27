// find maximmum and minimumm from array

let marks = [90, 86, 73, 99, 43, 59, 64];
let max;
let min;

for(let i = 0; i <= marks.length-1; i++) {
    for(let j = i+1; j <= marks.length-1; j++) {
        if(marks[i] > marks[j]){
            max = marks[i];
        } else {
            min = marks[j];
        }
    }
}

console.log(`max = ${max}, min = ${min}`);