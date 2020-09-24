import React, {useState} from 'react';
import {useDispatch} from 'react-redux'; 
import { View, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';
import {edit_user} from '../../../redux/actions';
import Background from '../../../assets/background.png';
import { Button } from 'react-native-elements';

import styles from './styles/MyProfile';
import { TextInput } from 'react-native-gesture-handler';
import { location_get } from '../../../redux/actions';

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

  //////////>> STATES <<//////////
  const [newUser, setNewUser] = useState({
    address:''
  })

  //THIS STATE IS TO HELP US VALIDATE THE INPUTS OF THE USERS
  const [error, setError] = useState({
    address:'*'
  })

  //THIS STATE IS TO HELP US IN THE ADRESS
  const [address, setAddress] = useState({
    street1: '',
    number: '',
    street2: ''
  })
  const [loading, setLoading] = useState(false)

  /////////////>> SUPPORT <</////////////////
    //////-> FUNCTIONS <-//////
    const withoutErrorLocation = () => {
      if(address.street1 && address.street2 && address.number) return false
      else return true
  }

  //SEARCH THE LOCATION WITH THE API
  const searchDirection = ()=>{   
      setLoading(true)     
      dispatch(location_get(address, newUser, setNewUser, error, setError, setLoading))
  }

  //SEND A STRING OF THE LOCATION
  const location = ()=>{
      const loc = newUser.address.split(',')
      return loc[2] + ', ' + loc[3] + ',\n' + loc[4]
  }

  const hOnCh_Adress = (e)=>{
    setAddress({
        ...address,
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
      <View>        
        <Text style={styles.mainTitle}>Edit profile</Text>         
        <Separator /> 
          <Text style={styles.label}>Phone number:</Text>
          <TextInput style={styles.inputR} placeholder= {user.phoneNumber} name= "phoneNumber" onChange= {handlerOnChange}/>
        <Separator />
        <Text style={styles.label}>Address:</Text>
        <View style={styles.adressContainer}>
          <Text style={styles.label}>Principal Street</Text>
          <View style={styles.streetPrincipal}>                    
            <TextInput style={styles.inputStreet} editable name='street1' onChange={hOnCh_Adress}/>
            <TextInput style={styles.inputSubStreet} keyboardType='numeric' 
            editable name='number' onChange={hOnCh_Adress} placeholder='N°'/>
          </View>
          <View>
              <Text style={styles.label}>One street that cuts the principal</Text>
              <TextInput style={styles.inputR} editable name='street2' onChange={hOnCh_Adress}/>
          </View>

          <Button title='SEARCH' onPress={searchDirection} disabled={withoutErrorLocation()} loading={loading}
          disabledStyle={styles.buttonFalse} 
          disabledTitleStyle={styles.buttonTextFalse}
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}/>
        </View>         

      <Text style={newUser.address ? styles.locationY : styles.locationX}>{newUser.address ? location() : 'City'}</Text>   
            
        <Separator />
        
        <TouchableHighlight onPress= {editData}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  )
}