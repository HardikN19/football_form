const userName = document.querySelector('#userName');
const btnFetch = document.querySelector('.btn-fetch');
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
    if(length == 0){
        errorMessage[0].innerHTML = ``;
        return false;
    }
    for(let i=0;i<length;i++){
        if(text[i]==' '){
            errorMessage[0].innerHTML = `[Please remove the space]`;
            return false;
        }
    }
    errorMessage[0].innerHTML = ``;
    return true;
}

function checkFirstName(){
    let text = firstName.value;
    let length = text.length;

    if(length == 0){
        errorMessage[1].innerHTML = ``;
        return false;
    }
    for(let i=0;i<length;i++){
        if(text[i]>='a'&& text[i]<='z' || text[i]>='A'&& text[i]<='Z') {
            errorMessage[1].innerHTML = ``;
        }
        else{
            errorMessage[1].innerHTML = `[Only alphabet allowed without space]`;
            return false;
        }
    }
    return true;
}

function checkLastName(){
    let text = lastName.value;
    let length = text.length;
    if(length == 0){
        errorMessage[2].innerHTML = ``;
        return true;
    }
    for(let i=0;i<length;i++){
        if(text[i]>='a'&& text[i]<='z' || text[i]>='A'&& text[i]<='Z' || text[i]==' ')
        {
            errorMessage[2].innerHTML = ``;
        }
        else{
            errorMessage[2].innerHTML = `[Only alphabet allowed]`;
            return false;
        }
    }
    return true;
}


function checkPhoneNumber(){
    let text = phoneNumber.value;
    let length = text.length;
    console.log(length);

    if(length == 10){
        errorMessage[3].innerHTML = ``;
        return true;
    }
    else if(length==0){
        errorMessage[3].innerHTML = ``;
        return false;
    }
    else{
        errorMessage[3].innerHTML = ` [Must have 10 digits]`;
        return false;
    }
}


slider.addEventListener('change',()=>{
    if(slider.checked){
        email.disabled = false;
    }
    else{
        email.disabled = true;
    }
});


function checkEmail(){
    if(email.value){
        return true;
    }
    else{
        return false;
    }
}


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
    if(length == 0 || length == 6){
        errorMessage[5].innerHTML = ``;
        return true;
    }
    else{
        errorMessage[5].innerHTML = ` [Must have 6 digits]`;
        return false;
    }
}


function checkCountry(){
    if(countySelect.value && stateSelect.value && districtSelect.value){
        return true;
    }
    else{
        return false;
    }
}

userName.addEventListener('input',checkSubmitBtn);
firstName.addEventListener('input',checkSubmitBtn);
lastName.addEventListener('input',checkSubmitBtn);
phoneNumber.addEventListener('input',checkSubmitBtn);
email.addEventListener('input',checkSubmitBtn);
age.addEventListener('change',checkSubmitBtn);
pinCode.addEventListener('input', checkSubmitBtn);
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
    btnSubmit.disabled = true;
    btnFetch.disabled = true;

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
    if(checkFirstName() & checkPhoneNumber() & checkUserName() & checkAgeGroup() & checkEmail() & checkCountry() & checkTeam() & checkPosition() & checkpinCode() & checkLastName()){
        btnSubmit.disabled = false;
    }
    else{
        btnSubmit.disabled = true;
    }
}