//wap for grade calculatar

let n = prompt("Enter your persentage: ");

n = parseInt(n);

if(n > 100){
    console.log("Enter Valid number !");
}
else if(n>=90 && n<=100) {
    console.log("Grade A+");
}
else if(n>=80 && n<90) {
    console.log("Grade A");
}
else if(n>=70 && n<80) {
    console.log("Grade B");
}
else if(n>=60 && n<70) {
    console.log("Grade C");
}
else if(n>=50 && n<60) {
    console.log("Grade D");
}
else if(n>=34 && n<50) {
    console.log("Grade E");
}
else {
    console.log("Fail !");
}