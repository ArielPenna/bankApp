//////////////// MODELS ////////////////
import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TextInput, Button, ImageBackground, TouchableHighlight } from 'react-native';

//////////////// SCRIPTS ////////////////
import {search_code} from '../../../redux/actions'
import style from './styles/CodeValidationStyle'

//////////////// IMGS ////////////////
import Background from '../../../assets/background.png'


export default () => {
   const dispatch = useDispatch()
   const [code, setCode] = useState(0)
   const user = useSelector(state => state.saveUser)

   const hOnCh_code = (e) => {
      setCode({ codigo: parseInt(e.target.value)})
   }

   const validationCode = () => {
      try {
         dispatch(search_code(code, user))
      } catch (error) {
         console.log(error)
      }
   }
  return (
     <ImageBackground source={Background} style={style.container}>
      <View>
         <Text style={style.mainTitle}>Código de autentificación</Text>
         <TextInput onChange={hOnCh_code} keyboardType='numeric' 
         editable name='documentNumber' style={style.input}/>
          <TouchableHighlight onPress={validationCode} style={style.appButtonContainer}>
                <Text style={style.appButtonText}>Send</Text>
            </TouchableHighlight>
      </View>
     </ImageBackground>
  );
}
