let uname = document.getElementById('uname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let con_password = document.getElementById('con-password');

let error = document.getElementById('error');
const btn = document.getElementById('btn');

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '~', '!', '@', '#', '$', '%', '&'];

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/'];


btn.addEventListener('click', () => {
    validation();
});

function validation() {
    if(uname.value == '' || email.value == '' || password.value == '' || con_password.value == ''){
        error.innerHTML = "every input field should be filled";
        console.log('no success');
    } else {
        for(let i = 0; i < uname.value.length; i++) {
            for(let j = 0; j < arr.length; j++) {
                if(uname.value[i] == arr[j]){
                    error.innerHTML = 'no numbers or special character are allowed';
                }else{
                    error.innerHTML = 'sign up successfully';
                    console.log(uname.value[i], arr[j]);
                }
            }
        }
    }
}

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}