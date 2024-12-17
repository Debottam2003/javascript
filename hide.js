let eye = document.querySelector('.eye');
let password = document.querySelector('.password');
let hide = true;
eye.addEventListener('click',(event)=>{
    if(hide === true) {
        password.type = 'text';
        eye.innerText = '🔓';
        hide = false;
    }
    else{
        password.type = 'password';
        eye.innerText = '🔒';
        hide = true;
    }
});

