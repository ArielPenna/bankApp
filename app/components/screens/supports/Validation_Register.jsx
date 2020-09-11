const validate = (input)=>{
    /*La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, 
    al menos una minúscula y al menos una mayúscula.
    NO puede tener otros símbolos.
    Ejemplo:
    w3Unpocodet0d0*/
    const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    let errors = {};

/////////////>>FIRS NAME<</////////////
    if(!input.firstName ){
      errors.firstName = '*';
    }

/////////////>>LAST NAME<</////////////
    if(!input.lastName){
        errors.lastName = '*';
    }
    
/////////////>>EMAIL<</////////////  
    if(!input.email){
      errors.email = '*';
    }
    else if(!/\S+@\S+\.\S+/.test(input.email)){
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
    else if(!regex.test(input.password)){
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