
import '../styles/main.scss';

let form = document.forms[0];

let firstName = document.getElementById('firstName');
let lastName =document.getElementById('lastName');
let email =document.getElementById('email');
let phoneNo =document.getElementById('phoneNo');
let emailError= document.querySelector("#email + span.error");

let firstNameError= document.querySelector("#firstName + span.error");
let lastNameError= document.querySelector("#lastName + span.error");
let phoneError= document.querySelector("#phoneNo + span.error");
let displayError = document.getElementById('displayError');

let btn = document.getElementById('btn__primary');

let errorClass = document.getElementsByClassName('error');

let erroricn = errorClass.item(0);






btn.addEventListener('click',(e)=>{

        let inputsElem = Array.from(form.children);

        for(let i=0;i<inputsElem.length-1;i++){
            if(inputsElem[i].children[0].validity.valueMissing || inputsElem[i].children[0].validity.typeMismatch){
                displayError.style.display="block";
                displayError.innerHTML="One of the field is incorrect or invalid. Please, follow the examples in order to continue";
                displayError.classList.add('danger');
                displayError.classList.remove('success');
                inputsElem[i].children[0].style.border="3px solid red";
                    
            }
            if(inputsElem[0].children[0].style.borderColor ==="red"){
                firstNameError.innerHTML="Enter your first Name";
                
            } 
            if(inputsElem[1].children[0].style.borderColor ==="red"){
                lastNameError.innerHTML="Enter your last Name";
         
            }  
            if(inputsElem[2].children[0].style.borderColor ==="red"){
                emailError.innerHTML="Enter your email ID";
           
            } 
            if(inputsElem[3].children[0].style.borderColor ==="red"){
                phoneError.innerHTML="Enter your contact No.";
             
            } 
           
            else if(inputsElem[0].children[0].validity.valid){
                if(inputsElem[1].children[0].validity.valid){
                    if(inputsElem[2].children[0].validity.valid){
                        if(inputsElem[3].children[0].validity.valid){
                            displayError.style.display="block";
                            displayError.innerHTML="Your form has been submitted ";
                            displayError.classList.remove('danger');
                            displayError.classList.add('success');
                        }  
                    }
                }
                    
                }
    
      
    }

        e.preventDefault();   
})
// //Built in API

//Email validation message
email.addEventListener("input",(e)=>{
    // const emailRegExp = new RegExp("/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i");
    let emailerricn = errorClass.item(2);
    if(email.validity.valueMissing){
        // If the field is empty,
    // display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
        email.style.border ="3px solid red";
        emailerricn.setAttribute('data-before','!');
        emailerricn.style.setProperty('--success','red');
        return false;
    }
    else if(email.validity.typeMismatch){
        emailError.textContent = 'Enter a valid email address';
        email.style.border ="3px solid red";
        emailerricn.setAttribute('data-before','!');
        emailerricn.style.setProperty('--success','red');
    }
    else if(email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
        emailerricn.setAttribute('data-before','!');
        emailerricn.style.setProperty('--success','red');
    }  
    else if(email.validity.valid) {
        emailError.textContent ="";
        emailError.className = 'error';
        email.style.border ="3px solid green";
        emailerricn.setAttribute('data-before','✓');
        emailerricn.style.setProperty('--success','green');
        return true;
    }
});




//Contact No.
phoneNo.addEventListener('input',(e)=>{
    let phoneerricn = errorClass.item(3);
    var phoneno = new RegExp(/^\d{10}$/);
    if(phoneNo.value == ""){
        phoneError.innerHTML="Enter your mobile No.";
        phoneerricn.setAttribute('data-before','!');
        phoneerricn.style.setProperty('--success','red');
        return false;
    }
    else if(!phoneno.test(phoneNo.value)){
        phoneError.innerHTML="Enter your 10 digit correct mobile No.";
        phoneNo.style.border="3px solid red";
        phoneerricn.setAttribute('data-before','!');
        phoneerricn.style.setProperty('--success','red');
        return false;
    }
    else{
        phoneError.innerHTML="";
        phoneNo.style.border="3px solid green";
        phoneerricn.setAttribute('data-before','✓');
        phoneerricn.style.setProperty('--success','green');
        return true;
    }
})


firstName.addEventListener("input",(e)=>{
    var regName = new RegExp(/^[A-Za-z]+\s?[A-Za-z]+$/);
  
    if(firstName.value.length==0 || firstName.value == ""){
        erroricn.setAttribute('data-before','!');
        erroricn.style.setProperty('--success','red');
        firstNameError.textContent ="Enter your first Name";
        firstName.style.border="3px solid red";
     
        return false;
    }else if(!regName.test(firstName.value)){
        firstNameError.textContent ="Enter a valid name";
        firstName.style.border="3px solid red";
        erroricn.setAttribute('data-before','!');
        erroricn.style.setProperty('--success','red');
        return false;
    }else if(firstName.value.length>20){
        firstNameError.textContent ="Your name is too long";
        firstName.style.border="3px solid red";
        erroricn.setAttribute('data-before','!');
        erroricn.style.setProperty('--success','red');
        return false;
    }
    else{
        firstNameError.textContent ="";
        firstName.style.border="3px solid green";
        erroricn.setAttribute('data-before','✓');
        erroricn.style.setProperty('--success','green');
        return true;
    }
   
});



lastName.addEventListener("input",(e)=>{
    var regName = new RegExp(/^[A-Za-z]+$/);
    let nameerricn = errorClass.item(1);
    if(lastName.value.length==0 || lastName.value ==""){
        lastNameError.textContent ="Enter your last Name";
        lastName.style.border="3px solid red";
        nameerricn.setAttribute('data-before','!');
        nameerricn.style.setProperty('--success','red');
        return false;
    }else if(!regName.test(lastName.value)){
        lastNameError.textContent ="Enter a valid name";
        lastName.style.border="3px solid red";
        nameerricn.setAttribute('data-before','!');
        nameerricn.style.setProperty('--success','red');
        return false;
    }else if(lastName.value.length>20){
        lastNameError.textContent ="Your name is too long";
        lastName.style.border="3px solid red";
        nameerricn.setAttribute('data-before','!');
        nameerricn.style.setProperty('--success','red');
        return false;
    }
    else{
        lastNameError.textContent ="";
        lastName.style.border="3px solid green";
        nameerricn.setAttribute('data-before','✓');
        nameerricn.style.setProperty('--success','green');
        return true;
    }
   
});
