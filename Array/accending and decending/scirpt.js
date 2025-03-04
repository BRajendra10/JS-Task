// wap to arrange array in accending and decending

let arr = [79, 65, 4, 99, 33, 10, 5, 125];

// ascending
for(let i = 0; i < arr.length; i++) {
  for(let j = i+1; j < arr.length; j++) {

    if(arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

  }
}

// descending
// for(let i = 0; i < arr.length; i++) {
//   for(let j = i+1; j < arr.length; j++) {

//     if(arr[i] < arr[j]) {
//       let temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }

//   }
// }

console.log(arr);
