import React from 'react';
import { Button, View, SafeAreaView, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';
import style from './styles/OnlyContactStyle'

import Background from '../../../assets/background.png'


export default ({ route, navigation }) => {

   const {name, email, cvu, telefono} = route.params 

  return (
    <ImageBackground source={Background} style={style.container}>

      <View>
      
        <Text style={style.name}>{name}</Text>  

        <View style={style.containerDate}>
        <Text style={style.titulo}>{email}</Text> 
        <Text style={style.titulo}>{cvu}</Text> 
        <Text style={style.titulo}>{telefono}</Text>
         </View>

         <TouchableHighlight style={style.btn} onPress={()=> navigation.navigate('Add Contact')}>
            <Text style={style.appButtonText}> Edit </Text>
        </TouchableHighlight>

        <TouchableHighlight style={style.btn} onPress={()=> navigation.navigate('Add Contact')}>
            <Text style={style.appButtonText}> Delete </Text>
        </TouchableHighlight>

      </View>      
    </ImageBackground>
  )
}
