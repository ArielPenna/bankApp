import React, {useState} from 'react';
import {useDispatch} from 'react-redux'; 
import { View, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';
import {edit_user} from '../../../redux/actions';
import Background from '../../../assets/background.png';
import { Card } from 'react-native-elements';

import styles from './styles/MyProfile';
import { TextInput } from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;



export default ({ navigation, route}) => {
    
    const dispatch= useDispatch()
    const {user}= route.params
    const {editProfile}= route.params
    const [update, setUpdate]= useState({phoneNumber: user.phoneNumber, address: user.address})

    const handlerOnChange= (e)=> {
        setUpdate ({
            ...update,
            [e.target.name]: e.target.value
        })
    }

    const editData = ()=>{
    try{         
    dispatch(edit_user(update, user.id))
    editProfile('update')
    navigation.navigate('Main')
    }
    catch(err){
    console.log(err)
    }

}

  return (    
    <ImageBackground source={Background} style={styles.container}>
      <View style={styles.misdatos}>
        <Separator />
        <Text style={styles.mainTitle}>Edit profile</Text>         
        <Separator /> 
        <Text style={styles.label}>Phone number:</Text>
        <TextInput style={styles.inputR} placeholder= {user.phoneNumber} name= "phoneNumber" onChange= {handlerOnChange}/>
        <Separator />
        <Text style={error.address ? style.error : style.label}>Address:</Text>
        <TextInput style={styles.inputR} placeholder= {user.address} name= "address" onChange= {handlerOnChange}/>
        <Separator />
        
        <TouchableHighlight onPress= {editData}>
          <View style={styles.touch}>
            <Text>Submit</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  )
}