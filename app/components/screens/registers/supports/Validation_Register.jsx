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
    
//////////////////////////////////////////////////////////////    

    let errors = {};

/////////////>>FIRS NAME<</////////////
    if(!input.firstName ){
      errors.firstName = 'Name *';
    }

/////////////>>LAST NAME<</////////////
    if(!input.lastName){
        errors.lastName = 'Surname *';
    }

/////////////>>ADRESS<</////////////
    if(!input.address){
      errors.address = 'Address *'
    }

/////////////>>DOC TYPE<</////////////
    if(!input.documentType){
      errors.documentType = 'Type *'
    }

/////////////>>DOC NUMBER<</////////////
    if(!input.documentNumber){
      errors.documentNumber = 'Number *'
    }

/////////////>>BIRTH DATE<</////////////
    if(!input.birth){
      errors.birth = 'Birth date *'
    }

/////////////>>TEL/CEL<</////////////
    if(!input.phoneNumber){
      errors.phoneNumber = 'Phone N° *'
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
      errors.password = 'Password *';
    }
    else if(!regex_pass.test(input.password)){
      errors.password = 'Password *';
    }

/////////////>>CONFIRM PASSWORD<</////////////
    if(!input.confirmPassword){
        errors.confirmPassword = 'Confirm Password *';
    }
    else if(input.confirmPassword != input.password){
        errors.confirmPassword = 'Confirm Password *'
    }

    return errors;
  }

export default validate