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
   const val = useSelector(state => state.code)
   
   /////////>> STATE <<////////
   const [code, setCode] = useState(0)

   ////////>> HANDLER ON CHANGE (hOnCh) <<///////////
   const hOnCh_code = (e) => {
      setCode({ codigo: e})
   }

   ///////>> DISPATCH <</////////
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
            {/*////////////>> TITLE <</////////////*/}
            <Text style={style.mainTitle}>Authentication Code</Text>

            {/*////////////>> INPUT <</////////////*/}
            <TextInput onChangeText={hOnCh_code} keyboardType='numeric' 
            editable name='documentNumber' style={style.input}/>

            {/*////////////>> BUTTON <</////////////*/}
            <TouchableHighlight onPress={validationCode} style={style.appButtonContainer}>
                  <Text style={style.appButtonText}>Send</Text>
            </TouchableHighlight>
         </View>
      </ImageBackground>
   );
}
