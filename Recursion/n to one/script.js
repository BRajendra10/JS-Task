
function myFunction(num) { // 0

    if(num >= 1) { // 0 > 1
        console.log(num); // 1
        num--;
        myFunction(num); // 0
    }
}

let n = prompt("Enter a number: ");
n = parseInt(n);

myFunction(n); // 5