//////////////// MODELS ////////////////
import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TextInput, Button, ImageBackground, TouchableHighlight } from 'react-native';

//////////////// SCRIPTS ////////////////
import { search_code, send_mail__post } from '../../../../redux/actions'
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

   const sendAgainEmail = () => {
      try{
         dispatch(send_mail__post(route.params))
      }
      catch(err){
         console.log(err)
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

            {/*////////////>> BUTTON VALIDATE <</////////////*/}
            <TouchableHighlight onPress={validationCode} style={style.appButtonContainer}>
                  <Text style={style.appButtonText}>Confirm</Text>
            </TouchableHighlight>

            {/*////////////>> BUTTON SEND AGAIN <</////////////*/}
            <Text style={style.subTitle}>You didn't get the code?</Text>
            <TouchableHighlight onPress={sendAgainEmail} style={style.appButtonContainerAgain}>
                  <Text style={style.appButtonTextAgain}>Send Code Again</Text>
            </TouchableHighlight>

         </View>
      </ImageBackground>
   );
}
