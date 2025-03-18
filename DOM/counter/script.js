
const title = document.getElementById("title");
const increament = document.getElementById("increament");
const decreament = document.getElementById("decreament");
const divided = document.getElementById("divided");
const multiply = document.getElementById("multiply");

let count = 0;

increament.addEventListener('click', () => {
    count++;
    title.innerHTML = count;
});

decreament.addEventListener('click', () => {
    if(count>0){
        count--;
    }
    title.innerHTML = count;
});

divided.addEventListener('click', () => {
    if(count>=1){
        count/=2;
    }
    title.innerHTML = count;
});

multiply.addEventListener('click', () => {
    if(count>0){
        count*=2;
    }
    title.innerHTML = count;
});