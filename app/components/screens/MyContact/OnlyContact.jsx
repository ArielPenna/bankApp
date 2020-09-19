import React from 'react';
import { Button, View, SafeAreaView, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';
import { Divider } from 'react-native-elements';
import {useDispatch} from 'react-redux'
import {delete_friend} from '../../../redux/actions.js'

import style from './styles/OnlyContactStyle'
import EnviarDinero from "../../../assets/enviarDinero.png"
import Background from '../../../assets/background.png'


export default ({ route, navigation }) => {

  const dispatch = useDispatch()
  const {id, name, email, cvu, telefono} = route.params 



  const deleteFriend = () => {
    try {
      dispatch(delete_friend(id))
    } catch (err) {
      console.log(err)
    }
  }



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

        <TouchableHighlight style={style.btn} onPress={deleteFriend}>
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
