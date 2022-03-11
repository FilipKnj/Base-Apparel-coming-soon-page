const form = document.querySelector('form');
const input = document.querySelector('input[type="email"');
const btn = document.querySelector('button');
let emailReg = /^(\w|\.|\_|\-)+[@](\w|\.|\_|\-)+[.]\w{2,3}$/;
const p = document.querySelector('#message');

btn.addEventListener('click',submitForm);

function submitForm(e){
    e.preventDefault();
    
    let errors = [];

    if(emailReg.test(input.value) == false){
        errors.push(`Please provide valid email`)
    }
    if(errors.length != 0){
        btn.style.left = '90%';
        p.style.display = 'block';
    }else{
        form.submit();
    }
}