///////////////////>> MODULES <<///////////////////
import React, {useState} from 'react'
import {View, Text, TextInput, TouchableHighlight, Image, ImageBackground} from 'react-native'
import {useDispatch} from 'react-redux'

///////////////////>> SCRIPTS <<///////////////////
import {login_user__post} from '../../redux/actions'

///////////////////>> IMAGES <<///////////////////
import Background from '../../assets/background.png'
import style from './styles/LoginStyle'

//////////////////////////////////////////////////

//--Leyenda--//
//hOnCh === handlerOnChange


export default () => {
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
            dispatch(login_user__post(login))
        } 
        catch(err){console.log(error)}
    }


    return (
    <ImageBackground source={Background} style={style.container}>
      <View>
        <Text style={style.mainTitle}>Login</Text>
        <Image 
          style={style.img}
          source={require('../../assets/logo.png')} />
        <View >
          {/*///////////////////////>> EMAIL <<///////////////////////*/}
            <Text style={style.label}>E-mail</Text>
            <TextInput style={style.inputR} placeholder= 'Type in here' editable name='email' onChange= {hOnCh_Login}/>

          {/*///////////////////////>> PASSWORD <<///////////////////////*/}  
            <Text style={style.label}> Password </Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable placeholder='Type in here' editable name='password' onChange={hOnCh_Login}/>

          {/*///////////////////////>> LOGIN <<///////////////////////*/}
          <TouchableHighlight onPress={onLogin} style={style.appButtonContainer}>
            <Text style={style.appButtonText}>Send</Text>  
          </TouchableHighlight>          
          {/*//////////////////////////////////////////////////////////*/}

        </View>
      </View>      
    </ImageBackground>
  )
}