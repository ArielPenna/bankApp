///////////////////>> MODULS <<///////////////////
import React, {useState} from 'react'
import {View, Text, TextInput, Image, ImageBackground,TouchableHighlight} from 'react-native'
import {useDispatch} from 'react-redux'

///////////////////>> SCRIPTS <<///////////////////
import {login_user__post} from '../../../redux/actions'
import style from './styles/LoginStyle'

///////////////////>> IMAGES <<///////////////////
import Background from '../../../assets/background.png'
import Logo from '../../../assets/logo.png'

//////////////////////////////////////////////////

//--Leyenda--//
//hOnCh === handlerOnChange

export default ({navigation}) => {
    const dispatch = useDispatch()

///////////>> STATES <<////////////
    const [login, setLogin]= useState ({
        email:'',
        password:''
    }) 

    const [error, setError] = useState({
      email:'*',
      password:'*'
    })


///////////////>> SUPPORTS <<///////////////

//-----------> VARS <-------------//
    const regex_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;    

    /*La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, 
    al menos una minúscula y al menos una mayúscula.
    NO puede tener otros símbolos.
    Ejemplo:
    w3Unpocodet0d0*/
    const regex_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{1,10}$/;


    ////-> FUNCTIONS <-/////
    const validation = (input) =>{
        let error = {}

        if(!input.email){
            error.email = '*';
        }
        else if(!regex_email.test(input.email)){
            error.email = 'Email invalido *';
        }
        if (!input.password) {
          error.password = '*';
        }
        else if(!regex_pass.test(input.password)){
          error.password = '*'
        }

        return error
    }  
    
    const withoutError = ()=>{
        if(error.email || error.password) return true
        else return false
    }

//////////>> HANDLER ON CHANGE (hOnCh) <<////////////
    const hOnCh_Login = (e) => {
        setError(validation({
          ...login,
          [e.target.name]: e.target.value
        }))
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

//DISPATCH TO LOG IN THE USER
    const onLogin = () => {
        try{ 
          dispatch(login_user__post(login));
          navigation.navigate('Main')
        } 
        catch(err){console.log(err)}
    }
      

    return (
    <ImageBackground source={Background} style={style.container}>
      <View>
        <Text style={style.mainTitle}>Login</Text>
        <Image 
          style={style.img}
          source={Logo} />
        <View >
          {/*///////////////////////>> EMAIL <<///////////////////////*/}
            <Text style={style.label}>Email</Text>
            <TextInput style={style.inputR} placeholder= 'E-mail' editable name='email' onChange= {hOnCh_Login}/>

          {/*///////////////////////>> PASSWORD <<///////////////////////*/}  
            <Text style={style.label}> Password </Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable placeholder='Contraseña' name='password' onChange={hOnCh_Login}/>

          {/*///////////////////////>> LOGIN <<///////////////////////*/}
            <TouchableHighlight disabled={withoutError()}  style={withoutError() ? style.buttonFalse : style.button} onPress={onLogin}>             
              <Text style={withoutError() ? style.buttonTextFalse : style.buttonText}>ENTER</Text>            
            </TouchableHighlight> 
            
          {/*//////////////////////////////////////////////////////////*/}
          
        </View>
      </View>      
    </ImageBackground>
  )
}