////////////>> MODULES <<//////////
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';
import { Divider } from 'react-native-elements';
import {useDispatch} from 'react-redux'

////////////>> SCRIPTS <<//////////
import {delete_friend} from '../../../redux/actions.js'
import style from './styles/OnlyContactStyle'

////////////>> IMGS <<//////////
import EnviarDinero from "../../../assets/enviarDinero.png"
import Background from '../../../assets/background.png'

export default ({ route, navigation }) => {

  const dispatch = useDispatch()

  ///////////>> VARS <</////////////
  const {id, name, email, cvu, telefono} = route.params 

  /////////>> DISPATCH <</////////
  const deleteFriend = () => {
    try {
      dispatch(delete_friend({idFriend: id}))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ImageBackground source={Background} style={style.container}>
      <View>      
        {/*///////////-->>>> TITLE <<<<--///////////*/}
        <Text style={style.name}>{name}</Text>  

        {/*///////////-->>>> CONTAINER INFO <<<<--///////////*/}
        <View style={style.containerDate}>

            {/*///////////--> EMAIL <--///////////*/}
            <Text style={style.titulo}>Email: {email}</Text> 
            <Divider style={{ backgroundColor: 'grey', width:280, marginLeft:25 }} />

            {/*///////////--> CVU <--///////////*/}
            <Text style={style.titulo}>CVU: {cvu}</Text> 
            <Divider style={{ backgroundColor: 'grey', width:280, marginLeft:25 } } />

            {/*///////////--> PHONE <--///////////*/}
            <Text style={style.titulo}>Phone: {telefono}</Text>            
        </View>

        {/*///////////-->>>> EDIT BUTTON <<<<--///////////*/}
        <TouchableHighlight style={style.btn} onPress={()=> navigation.navigate('Add Contact',{id: id, nickName: name})}>
            <Text style={style.appButtonText}> Edit </Text>
        </TouchableHighlight>

        {/*///////////-->>>> DELETE BUTTON <<<<--///////////*/}
        <TouchableHighlight style={style.btn} onPress={deleteFriend}>
            <Text style={style.appButtonText}> Delete </Text>
        </TouchableHighlight>

        {/*///////////-->>>> SEND MONEY BUTTON <<<<--///////////*/}
        <TouchableHighlight onPress={() => navigation.navigate("SendMoney")}>
            <View style={style.touch}>
              <Image style={style.ico} source={EnviarDinero} />
              <Text style={style.small}>Send Money</Text>
            </View>
          </TouchableHighlight>
        {/*/////////////////////////////////////////////////////*/}

      </View>      
    </ImageBackground>
  )
}
