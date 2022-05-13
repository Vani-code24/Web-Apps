

//Validation using regex
export default function validate(field,regex){
    if(regex.test(field.value)){
        field.className="valid";
      
    } else{
        field.className="invalid";
        
    }
}

