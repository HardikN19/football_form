const userName = document.querySelector('#userName');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const phoneNumber = document.querySelector('#phoneNumber');
const pinCode = document.querySelector('#pinCode');
const slider = document.querySelector('#slide');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const team = document.querySelectorAll('.team');
const position = document.querySelectorAll('.position');
const errorMessage = document.querySelectorAll('.errorMessage');
const btnSubmit = document.querySelector('#btn-submit');
const countySelect = document.getElementById("countySelect");
const stateSelect = document.getElementById("stateSelect");
const districtSelect = document.getElementById("districtSelect");

function checkUserName(){
    let text = userName.value;
    let length = text.length;
    for(let i=0;i<length;i++){
        if(text[i]==' ')
        {
            return false;
        }
    }
    return true;
}

userName.addEventListener('input',()=>{
    let check = checkUserName();
    if(check){
        errorMessage[0].innerHTML = ``;
    }
    else{
        errorMessage[0].innerHTML = `[Only alphabet allowed / no space]`;
    }
    checkSubmitBtn();
});

function checkFirstName(){
    let text = firstName.value;
    let length = text.length;
    for(let i=0;i<length;i++){
        if(text[i]>='a'&& text[i]<='z' || text[i]>='A'&& text[i]<='Z') {}
        else{
            return false;
        }
    }
    return true;
}

firstName.addEventListener('input',()=>{
    let check = checkFirstName();
    if(check){
        errorMessage[1].innerHTML = ``;
    }
    else{
        errorMessage[1].innerHTML = `[Only alphabet allowed / no space]`;
    }
    checkSubmitBtn();
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

function checkPhoneNumber(){
    let text = phoneNumber.value;
    let length = text.length;
    if(length > 0 && length < 10)
        {
            return false;
        }
        else if(length==10){
            return true;
        }
}

phoneNumber.addEventListener('input',()=>{
    let check = checkPhoneNumber();
    if(check){
        errorMessage[3].innerHTML = ` `;
    }
    else{
        errorMessage[3].innerHTML = ` [Must have 10 digits]`;
    }
    checkSubmitBtn();
});

slider.addEventListener('change',()=>{
    if(slider.checked){
        email.disabled = false;
    }
    else{
        email.disabled = true;
    }
});

email.addEventListener('input',checkSubmitBtn);

function checkEmail(){
    if(email.value){
        return true;
    }
    else{
        return false;
    }
}
age.addEventListener('change',checkSubmitBtn);

function checkAgeGroup(){
    if(age.value==''){
        return false;
    }
    else{
        return true;
    }
}

function checkTeam(){
    for(let i =0;i<4;i++){
        if(team[i].checked){
            return true;
        }
    }
    return false;
}
for (let i=0, len=team.length; i<len; i++) {
    team[i].onclick = checkSubmitBtn;
} 

function checkPosition(){
    for(let i =0;i<4;i++){
        if(position[i].checked){
            return true;
        }
    }
    return false;
}
for (let i=0, len=position.length; i<len; i++) {
    position[i].onclick = checkSubmitBtn;
} 

function checkpinCode(){
    let text = pinCode.value;
    let length = text.length;
    if(length == 0 || length == 6)
        {
            return true;
        }
        else{
            return false;
        }
}

pinCode.addEventListener('input',()=>{
    let check = checkpinCode();
    if(check){
        errorMessage[5].innerHTML = ``;
    }
    else{
        errorMessage[5].innerHTML = ` [Must have 6 digits]`;
    }
    checkSubmitBtn();
});

function checkCountry(){
    if(countySelect.value && stateSelect.value && districtSelect.value){
        return true;
    }
    else{
        return false;
    }
}
countySelect.addEventListener('change',checkSubmitBtn);
stateSelect.addEventListener('change',checkSubmitBtn);
districtSelect.addEventListener('change',checkSubmitBtn);

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
    slider.checked = false;
    email.disabled = true;
    email.required = true;
    btnSubmit.disabled = true;

    
    
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


function checkSubmitBtn(){
    if(checkFirstName() && checkPhoneNumber() && checkUserName() && checkAgeGroup() && checkEmail() && checkCountry() && checkTeam() && checkPosition() && checkpinCode()){
        btnSubmit.disabled = false;
    }
    else{
        btnSubmit.disabled = true;
    }
}