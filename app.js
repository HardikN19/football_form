const userName = document.querySelector('#userName');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const phoneNumber = document.querySelector('#phoneNumber');
const pinCode = document.querySelector('#pinCode');
const slider = document.querySelector('#slide');
const email = document.querySelector('#email');

const errorMessage = document.querySelectorAll('.errorMessage');
const btnSubmit = document.querySelector('#btn-submit');


userName.addEventListener('input',()=>{
    let text = userName.value;
    let length = text.length;
    for(let i=0;i<length;i++){
        if(text[i]==' ')
        {
            btnSubmit.disabled = true;
            errorMessage[0].innerHTML = ` [Please remove space!]`;
        }
        else{
            btnSubmit.disabled = false;
            errorMessage[0].innerHTML = ``;
        }
    }
});

firstName.addEventListener('input',()=>{
    let text = firstName.value;
    let length = text.length;
    for(let i=0;i<length;i++){
        if(text[i]>='a'&& text[i]<='z' || text[i]>='A'&& text[i]<='Z')
        {
            btnSubmit.disabled = false;
            errorMessage[1].innerHTML = ``;
        }
        else if(length == 0){
            btnSubmit.disabled = false;
            errorMessage[1].innerHTML = ``;
        }
        else{
            btnSubmit.disabled = true;
            errorMessage[1].innerHTML = `[Only alphabet allowed / no space]`;
        }
    }
});

lastName.addEventListener('input',()=>{
    let text = lastName.value;
    let length = text.length;
    for(let i=0;i<length;i++){
        if(text[i]>='a'&& text[i]<='z' || text[i]>='A'&& text[i]<='Z' || text[i]==' ')
        {
            btnSubmit.disabled = false;
            errorMessage[2].innerHTML = ``;
        }
        else if(length == 0){
            btnSubmit.disabled = false;
            errorMessage[2].innerHTML = ``;
        }
        else{
            btnSubmit.disabled = true;
            errorMessage[2].innerHTML = `[Only alphabet allowed]`;
        }
    }
});

phoneNumber.addEventListener('input',()=>{
    let text = phoneNumber.value;
    let length = text.length;
    if(length > 0 && length < 10)
        {
            btnSubmit.disabled = true;
            errorMessage[3].innerHTML = ` [Must have 10 digits]`;
        }
        else{
            btnSubmit.disabled = false;
            errorMessage[3].innerHTML = ` `;
        }
});

slider.addEventListener('change',()=>{
    if(slider.checked){
        email.disabled = false;
        email.required = true;
    }
    else{
        email.disabled = true;
        email.required = false;
    }
});

pinCode.addEventListener('input',()=>{
    let text = pinCode.value;
    let length = text.length;
    if(length > 0 && length < 6)
        {
            btnSubmit.disabled = true;
            errorMessage[5].innerHTML = ` [Must have 6 digits]`;
        }
        else{
            btnSubmit.disabled = false;
            errorMessage[5].innerHTML = ` `;
        }
});

var CountryObject = {
    "India": {
      "Haryana": ["Ambala", "Bhiwani", "Hisar", "Rohtak"],
      "Punjab": ["Amritsar", "Ludhiana", "Mohali"],
      "Uttar Pradesh": ["Agra", "Meerut", "Noida", "Varanasi"]    
    },
    "Norway": {
      "Eastern /Austlandet": ["Innlandet", "Oslo", "Viken"],
      "Northern": ["Troms", "Nordland"]
    }
  }
  
window.onload = function() {
    email.required = true;
    btnSubmit.disabled = true;

    var countySelect = document.getElementById("countySelect");
    var stateSelect = document.getElementById("stateSelect");
    var districtSelect = document.getElementById("districtSelect");
    
    for (var x in CountryObject) {
        countySelect.options[countySelect.options.length] = new Option(x, x);
    }

    countySelect.onchange = function() {
        districtSelect.length = 1;
        stateSelect.length = 1;
        for (var y in CountryObject[this.value]) {
          stateSelect.options[stateSelect.options.length] = new Option(y, y);
      }
    }

    stateSelect.onchange = function() {
        districtSelect.length = 1;
        var z = CountryObject[countySelect.value][this.value];
        for (var i = 0; i < z.length; i++) {
            districtSelect.options[districtSelect.options.length] = new Option(z[i], z[i]);
        }
    }
}
