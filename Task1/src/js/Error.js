let errorClass = document.querySelectorAll('.error');

//display error icons 
export default function erroricons(field,num,errormsg){
   
    if(field.className == "invalid"){
        errorClass.item(num).setAttribute('data-before','!');
        errorClass.item(num).style.setProperty('--success','red');
        errorClass.item(num).innerHTML=`${errormsg}`;
    }
    else if(field.className == "valid"){
        errorClass.item(num).setAttribute('data-before','✓');
        errorClass.item(num).style.setProperty('--visible','visible');
        errorClass.item(num).style.setProperty('--success','green');
    }
}

