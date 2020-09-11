import React from 'react';
import { Button, View, SafeAreaView, Text, TextInput, Image} from 'react-native';
import style from './styles/LoginStyle'


export default () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.mainTitle} >Login</Text>
        <Image 
          style={style.img}
          source={require('../../assets/logo.png')} />
        <View >
            <Text style={style.label}> E-mail </Text>
            <TextInput style={style.inputR} editable name='e-mail' />
            <Text style={style.label}> Contraseña </Text>
            <TextInput style={style.inputR} editable name='password' />
            <Button style={style.btn} title='Enviar' />
        </View>
      </View>      
    </View>
  )
}