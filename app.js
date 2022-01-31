const firstName = document.querySelector('#firstName');
const slider = document.querySelector('#slide');
const email = document.querySelector('#email');


const btnSubmit = document.querySelector('#btn-submit');
// btnSubmit.disabled = true;

firstName.addEventListener('change',()=>{
    
});

slider.addEventListener('change',()=>{
    if(slider.checked){
        email.disabled = false;
    }
    else{
        email.disabled = true;
    }
});


