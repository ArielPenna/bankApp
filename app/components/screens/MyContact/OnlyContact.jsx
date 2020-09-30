////////////>> MODULES <<//////////
import React, {useEffect, useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';
import { Divider } from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux'

////////////>> SCRIPTS <<//////////
import { get_one_friend, delete_friend } from '../../../redux/actions.js'
import style from './styles/OnlyContactStyle'

////////////>> IMGS <<//////////
import EnviarDinero from "../../../assets/enviarDinero.png"
import Background from '../../../assets/background.png'

const Separator = () => <View style={style.separator} />;


export default ({ route, navigation }) => {

  const dispatch = useDispatch()

  const friend = useSelector(state => state.oneFriend)

  ///////////>> STATES <</////////////

  const [sureDelete, setSure] = useState(false)

  ///////////>> VARS <</////////////
  const {idFriend, nickName, update} = route.params 

  ///////////>> HANDLER ON CHANGE (hOnCh) <</////////////
  const hOnCh_SureDelete = () => {
    setSure(!sureDelete)
  }

  /////////>> DISPATCH <</////////
  const deleteFriend = () => {
    try {
      dispatch(delete_friend(idFriend))
      update('DELETE')
      navigation.navigate('MyContact')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    dispatch(get_one_friend(idFriend))    
  }, [])

  return (
    <ImageBackground source={Background} style={style.container}>
      <View>      
        {console.log(friend)}
        {/*///////////-->>>> TITLE <<<<--///////////*/}
        <Text style={style.name}>{nickName}</Text>  

        {/*///////////-->>>> CONTAINER INFO <<<<--///////////*/}
        <View style={style.containerDate}>

            {/*///////////--> EMAIL <--///////////*/}
            <Text style={style.titulo}>E-mail: {friend.email}</Text> 
            <Divider style={{ backgroundColor: 'grey', width:280, marginLeft:25 }} />

            {/*///////////--> PHONE <--///////////*/}
            <Text style={style.titulo}>Phone: {friend.phoneNumber}</Text>  
            <Divider style={{ backgroundColor: 'grey', width:280, marginLeft:25 } } />

            {/*///////////--> DNI <--///////////*/}
            <Text style={style.titulo}>ID N°: {friend.documentNumber}</Text>  
            <Divider style={{ backgroundColor: 'grey', width:280, marginLeft:25 } } />
            
            {/*///////////--> CVU <--///////////*/}
            <Text style={style.titulo}>CVU: {typeof friend.account === 'object' && friend.account.cvu}</Text> 
            
        </View>

        {/*///////////-->>>> EDIT BUTTON <<<<--///////////*/}
        <TouchableHighlight style={style.btn} onPress={()=> navigation.navigate('Edit Contact',{id: idFriend, nickName, update})}>
            <Text style={style.appButtonText}> EDIT </Text>
        </TouchableHighlight>

        <Separator/>

        {/*///////////-->>>> DELETE BUTTON <<<<--///////////*/}
        <TouchableHighlight style={style.btn} onPress={hOnCh_SureDelete}>
            <Text style={style.appButtonText}> DELETE </Text>
        </TouchableHighlight>

        {sureDelete &&
          <View>
            {/*/////////>> SUB TITLE <<///////////*/}
            <Text style={style.subTitle}>Are you sure you want to delete this contact?</Text>

            {/*/////////>> BUTTONS <<///////////*/}
            <View>

              {/*/////////>> BUTTON TO CONFIRM <<///////////*/}
              <TouchableHighlight onPress={deleteFriend} style={style.btn}>
                <Text style={style.appButtonText}> Yes </Text>
              </TouchableHighlight> 
              

              {/*/////////>> BUTTON TO GO BACK <<///////////*/}
              <TouchableHighlight onPress={hOnCh_SureDelete} style={style.btn}>
                <Text style={style.appButtonText}> No </Text>
              </TouchableHighlight> 
            </View>
          </View>
        }
        </View>      

        {/*///////////-->>>> SEND MONEY BUTTON <<<<--///////////*/}       
      <TouchableHighlight onPress={() => navigation.navigate("Send Money", {
                    idFriend, 
                    nickName,
                    changeTransaction: route.params.chng,
                    total: route.params.total
                })}>
        <View style={style.touch}>
          <Image style={style.ico} source={EnviarDinero} />
          <Text >SEND MONEY</Text>
        </View>
      </TouchableHighlight>

    </ImageBackground>
  )
}
