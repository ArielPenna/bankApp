//////////////// MODELS ////////////////
import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TextInput, Button, ImageBackground, TouchableHighlight } from 'react-native';

//////////////// SCRIPTS ////////////////
import {search_code} from '../../../../redux/actions'
import style from './styles/CodeValidationStyle'

//////////////// IMGS ////////////////
import Background from '../../../../assets/background.png'


export default ({route, navigation}) => {
   const dispatch = useDispatch()
   const [code, setCode] = useState(0)
   const val = useSelector(state => state.code)

   const hOnCh_code = (e) => {
      setCode({ codigo: parseInt(e.target.value)})
   }

   const validationCode = () => {
      try {
         dispatch(search_code(code))
      } catch (error) {
         console.log(error)
      }
   }
  return (
     <ImageBackground source={Background} style={style.container}>
        {console.log(val)}
        {val && navigation.navigate('Register Info', route.params)}
      <View>
         <Text style={style.mainTitle}>Authentication Code</Text>
         <TextInput onChange={hOnCh_code} keyboardType='numeric' 
         editable name='documentNumber' style={style.input}/>
          <TouchableHighlight onPress={validationCode} style={style.appButtonContainer}>
                <Text style={style.appButtonText}>Send</Text>
            </TouchableHighlight>
      </View>
     </ImageBackground>
  );
}
