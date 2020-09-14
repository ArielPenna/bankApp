///////////////////>> MODULS <<///////////////////
import React, {useState} from 'react'
import {View, Text, TextInput, Button, Image, ImageBackground} from 'react-native'
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
    const [login, setLogin]= useState ({
        email:'',
        password:''
    }) 

    const hOnCh_Login = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

//DISPATCH TO LOG IN THE USER
    const onLogin = () => {
        try{ 
          dispatch(login_user__post(login));
          console.log("usuarioLogueado");
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
            <Text style={style.label}> Contraseña </Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable placeholder='Contraseña' name='password' onChange={hOnCh_Login}/>

          {/*///////////////////////>> LOGIN <<///////////////////////*/}
            <Button style={style.btn} color="#ea94a0" title='Enviar' onPress= {onLogin}/>
            
          {/*//////////////////////////////////////////////////////////*/}

          <Button title="MAIN" color="purple" onPress={() => navigation.navigate('Main')} />
        </View>
      </View>      
    </ImageBackground>
  )
}