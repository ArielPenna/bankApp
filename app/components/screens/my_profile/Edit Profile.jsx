////////////>> MODULES <<////////////
import React, {useState} from 'react';
import {useDispatch} from 'react-redux'; 
import { View, Text, ImageBackground, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

////////////>> SCRIPTS <<////////////
import {edit_user, location_get} from '../../../redux/actions';
import styles from './styles/MyProfileStyle';

////////////>> IMGS <<////////////
import Background from '../../../assets/background.png';

const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route}) => {
    
  const dispatch= useDispatch()

  ////////>> VARS <<//////////
  const {user, editProfile}= route.params

  ////////>> STATES <<//////////
  const [update, setUpdate]= useState({phoneNumber: user.phoneNumber, address: user.address})

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

  /////////////>> HANDLER ON CHANGE (hOnCh) <<//////////

  const hOnCh_Adress = (e)=>{
    setAddress({
        ...address,
        [e.target.name]: e.target.value
    })
  }

  const handlerOnChange= (e)=> {
    setUpdate ({
        ...update,
        [e.target.name]: e.target.value
    })
  }

  //////////>> DISPATCH <<////////

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
        {/*//////////////>> TITLE <<//////////////*/}
        <Text style={styles.mainTitle}>Edit profile</Text>  
        
        <Separator /> 

        {/*//////////////>> UPDATE INPUTS <<//////////////*/}
        {/*///>>>>>>> PHONE <<<<<<<<///*/}
        <Text style={styles.label}>Phone number:</Text>
        <TextInput style={styles.inputR} placeholder= {user.phoneNumber} name= "phoneNumber" onChange= {handlerOnChange}/>
        
        <Separator />
        
        {/*///>>>>>>> ADDRESS <<<<<<<<///*/}
        <Text style={styles.label}>Address:</Text>
        <View style={styles.adressContainer}>

          {/*///>>>>>>> STREET 1 <<<<<<<<///*/}
          <Text style={styles.label}>Principal Street</Text>
          <View style={styles.streetPrincipal}>                    
            <TextInput style={styles.inputStreet} editable name='street1' onChange={hOnCh_Adress}/>
            <TextInput style={styles.inputSubStreet} keyboardType='numeric' 
            editable name='number' onChange={hOnCh_Adress} placeholder='N°'/>
          </View>

          {/*///>>>>>>> STREET 2 <<<<<<<<///*/}
          <View>
              <Text style={styles.label}>One street that cuts the principal</Text>
              <TextInput style={styles.inputR} editable name='street2' onChange={hOnCh_Adress}/>
          </View>

          {/*///>>>>>>> SEARCH BUTTON <<<<<<<<///*/}
          <Button title='SEARCH' onPress={searchDirection} 
          disabled={withoutErrorLocation()} loading={loading}
          disabledStyle={styles.buttonFalse} 
          disabledTitleStyle={styles.buttonTextFalse}
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}/>
        </View>         

        {/*///>>>>>>> SHOW LOCATION <<<<<<<<///*/}
        <Text style={newUser.address ? styles.locationY : styles.locationX}>{newUser.address ? location() : 'City'}</Text>   
            
      <Separator />
        
      {/*//////////////>> UPDATE BUTTON <<//////////////*/}
      <TouchableHighlight onPress= {editData}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </View>
      </TouchableHighlight>

      </View>
    </ImageBackground>
  )
}