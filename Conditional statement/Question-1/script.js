// Wap to check if a person is eligible for vote or not.

let age = prompt("Enter your age: ");

age = parseInt(age);

if(age<=0 || age>=100) {
    console.log("Enter valid age!");
}
else if(age>=18) {
    console.log("Eligible for vote.");
}
else {
    console.log("Not eligiable for vote.");
}