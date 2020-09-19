import React from 'react';
import { Button, View, SafeAreaView, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';
import { Divider } from 'react-native-elements';

import style from './styles/OnlyContactStyle'
import EnviarDinero from "../../../assets/enviarDinero.png"
import Background from '../../../assets/background.png'


export default ({ route, navigation }) => {

   const {name, email, cvu, telefono} = route.params 

  return (
    <ImageBackground source={Background} style={style.container}>

      <View>
      
        <Text style={style.name}>{name}</Text>  

        <View style={style.containerDate}>

            <Text style={style.titulo}>Email: {email}</Text> 
            <Divider style={{ backgroundColor: 'grey', width:280, marginLeft:25 }} />  

            <Text style={style.titulo}>CVU: {cvu}</Text> 
            <Divider style={{ backgroundColor: 'grey', width:280, marginLeft:25 } } />

            <Text style={style.titulo}>Celphone: {telefono}</Text>
            
         </View>


         <TouchableHighlight style={style.btn} onPress={()=> navigation.navigate('Add Contact')}>
            <Text style={style.appButtonText}> Edit </Text>
        </TouchableHighlight>

        <TouchableHighlight style={style.btn} onPress={()=> navigation.navigate('Add Contact')}>
            <Text style={style.appButtonText}> Delete </Text>
        </TouchableHighlight>

         <TouchableHighlight onPress={() => navigation.navigate("SendMoney")}>
            <View style={style.touch}>
              <Image style={style.ico} source={EnviarDinero} />
              <Text style={style.small}>Send Money</Text>
            </View>
          </TouchableHighlight>
      </View>      
    </ImageBackground>
  )
}
