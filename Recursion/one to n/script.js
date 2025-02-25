// 1 to n recursion

let i = 1; // variable for printing numbers

function myFunction(num) { 
    if(i <= num) { // checking condition if my current i value is less then my number.
        console.log(i); // printing value (i)
        i++; // increasing value for next run
        myFunction(num); // recursion
    }
}

let n = prompt("Enter a number: ");
n = parseInt(n);

myFunction(n); // function calling