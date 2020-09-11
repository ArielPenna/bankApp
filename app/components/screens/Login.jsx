import React, {useState} from 'react'
import {View, Text, TextInput, Button, Image} from 'react-native'
import {useDispatch} from 'react-redux'
import {login_user__post} from '../../redux/actions'
import style from './styles/LoginStyle'


export default () => {
    const dispatch = useDispatch()
    const [login, setLogin]= useState ({
        email:'',
        password:''
    }) 
    function handlerOnChange(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    function onLogin(){
        try{ 
            dispatch(login_user__post(login))
        } 
        catch(err){console.log(error)}
    }


    return (
    <View style={style.container}>
      <View>
        <Text style={style.mainTitle}>Login</Text>
        <Image 
          style={style.img}
          source={require('../../assets/logo.png')} />
        <View >
            <Text style={style.label}> E-mail </Text>
            <TextInput style={style.inputR} placeholder= 'E-mail' editable name='email' onChange= {handlerOnChange}/>
            <Text style={style.label}> Contraseña </Text>
            <TextInput style={style.inputR} placeholder= 'Contraseña' editable name='password' secureTextEntry= 'true' onChange= {handlerOnChange} />
            <Button style={style.btn} color="#ea94a0" title='Enviar' onPress= {onLogin} />
        </View>
      </View>      
    </View>
  )
}