
import '../styles/main.scss';
import erroricons from './Error';
import validate from './validate';
let form = document.forms[0];

let inputsElem = Array.from(form.children);
const nameRegex = new RegExp(/^[A-Za-z]{2,20}$/);
const emailRegExp = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]+$/i);
const phoneno = new RegExp(/^\d{10}$/);
let passReg = new RegExp(/^(?=.*[0-9])(?=.*[@$%*#!&])[a-zA-Z0-9!@#$%*&]{6,20}$/);

let inputs = document.querySelectorAll('input');
let displayError = document.getElementById('displayError');
let btn = document.getElementById('btn__primary');

console.log(inputs[0]);




btn.addEventListener('click',(e)=>{
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value == "" || inputs[i].className == "invalid"){  
            displayError.innerHTML="One of the field is incorrect or invalid. Please, follow the examples in order to continue";
            displayError.classList.add('danger');
            displayError.classList.remove('success');
            inputs[i].className="invalid";  
            
        } 
        else if(inputs[0].className == "valid"){
            if(inputs[1].className == "valid"){
                if(inputs[2].className == "valid"){
                    if(inputs[3].className == "valid"){
                        if(inputs[4].className == "valid"){
                            displayError.innerHTML="Your form has been submitted ";
                        displayError.classList.remove('danger');
                        displayError.classList.add('success');
                        }
                    }
                }
            }
        }
                           
        }
       
        e.preventDefault();   
})




// Handling inputs 
inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
      
            if(e.target.name === 'firstName'){
                validate(e.target,nameRegex);
                erroricons(e.target,0,"Please enter a valid First Name");
                     
            } 
             else if(e.target.name === 'lastName'){
                validate(e.target,nameRegex)
                erroricons(e.target,1,"Please enter a valid Last Name");
            }
            
            else if(e.target.name === 'email'){
                validate(e.target,emailRegExp);
                erroricons(e.target,2);
                erroricons(e.target,2,"Please enter a valid email");
                if(e.target.value > 20){
                    erroricons(e.target,2,"Please enter a @ email");
                }
               
            }
            else if(e.target.name === 'phoneNo'){
                validate(e.target,phoneno);
                erroricons(e.target,3);
                erroricons(e.target,3,"Your contact No. should be of 10 digits only");   
            }
            else if(e.target.name === 'password'){
                validate(e.target,passReg);
                erroricons(e.target,4,"Your password should contain atleast 1 digit and 1 special character");
               
            }
    })
})
