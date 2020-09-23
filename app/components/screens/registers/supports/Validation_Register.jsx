const validate = (input)=>{

////////////////>> EXPRESIONES REGULARES <<////////////////

    /*La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, 
    al menos una minúscula y al menos una mayúscula.
    NO puede tener otros símbolos.
    Ejemplo:
    w3Unpocodet0d0*/
    const regex_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{1,10}$/;

    //Email
    const regex_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    //Documento
    const regex_dni = /[0-9]{1,8}/i

    const regex_phone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
    
//////////////////////////////////////////////////////////////    

    let errors = {};

/////////////>>FIRS NAME<</////////////
    if(!input.firstName ){
      errors.firstName = '*';
    }

/////////////>>LAST NAME<</////////////
    if(!input.lastName){
        errors.lastName = '*';
    }

/////////////>>ADRESS<</////////////
    if(!input.address){
      errors.address = '*'
    }

/////////////>>DOC NUMBER<</////////////
    if(!input.documentNumber){
      errors.documentNumber = '*'
    }

/////////////>>TEL/CEL<</////////////
    if(!input.phoneNumber){
      errors.phoneNumber = '*'
    } else if ( !regex_phone.test(input.phoneNumber)){
      errors.phoneNumber = 'Numero invalido *';
    }

/////////////>>DOCUMENT NUMBER<</////////////   
    if(!regex_dni.test(input.documentNumber)){
      errors.documentNumber='*'
    }
    
/////////////>>EMAIL<</////////////  
    if(!input.email){
      errors.email = '*';
    }
    else if(!regex_email.test(input.email)){
      errors.email = 'Email invalido *';
    }

/////////////>>CONFIRM EMAIL<</////////////
    if(!input.confirmEmail){
        errors.confirmEmail = '*';
    }    
    else if(input.confirmEmail != input.email){
        errors.confirmEmail = 'El email es diferente *'
    }

/////////////>>PASSWORD<</////////////    
    if(!input.password){
      errors.password = '*';
    }
    else if(!regex_pass.test(input.password)){
      errors.password = "Password mínimo de 8 digitos, una mayuscula, un numero*";
    }

/////////////>>CONFIRM PASSWORD<</////////////
    if(!input.confirmPassword){
        errors.confirmPassword = '*';
    }
    else if(input.confirmPassword != input.password){
        errors.confirmPassword = 'La password es diferente *'
    }

    return errors;
  }

export default validate