const firstName = document.querySelector('#firstName');
const errorMessage = document.querySelectorAll('.errorMessage');

const pinCode = document.querySelector('#pinCode');

const slider = document.querySelector('#slide');
const email = document.querySelector('#email');


const btnSubmit = document.querySelector('#btn-submit');
// btnSubmit.disabled = true;

firstName.addEventListener('input',()=>{
    let text = firstName.value;
    let length = text.length;
    for(let i=0;i<length;i++){
        if(text[i]>='a'&& text[i]<='z' || text[i]>='A'&& text[i]<='Z')
        {
            errorMessage[0].innerHTML = ``;
        }
        else if(length == 0){
            errorMessage[0].innerHTML = ``;
        }
        else{
            errorMessage[0].innerHTML = `[Only alphabet allowed]`;
        }
    }
});

pinCode.addEventListener('input',()=>{
    let text = pinCode.value;
    let length = text.length;
    if(length > 0 && length < 6)
        {
            errorMessage[1].innerHTML = ` [Must have 6 digits]`;
        }
        else{
            errorMessage[1].innerHTML = ` `;
        }
});


slider.addEventListener('change',()=>{
    if(slider.checked){
        email.disabled = false;
    }
    else{
        email.disabled = true;
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
