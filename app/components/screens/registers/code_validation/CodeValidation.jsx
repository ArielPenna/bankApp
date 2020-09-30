//////////////// MODELS ////////////////
import React ,{useState} from 'react';
import { View, Text, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements'

//////////////// SCRIPTS ////////////////
import { search_code, send_mail__post } from '../../../../redux/actions'
import style from './styles/CodeValidationStyle'

//////////////// IMGS ////////////////
import Background from '../../../../assets/background.png'

export default ({route, navigation}) => {
   
   /////////>> STATE <<////////
   const [code, setCode] = useState(0)
   const [val, setVal] = useState(false)
   const [loadingValidation, setValidation] = useState(false)
   const [loading, setLoading] = useState(false)

   ////////>> HANDLER ON CHANGE (hOnCh) <<///////////
   const hOnCh_code = (e) => {
      setCode({ codigo: e})
   }

   ///////>> DISPATCH <</////////
   const validationCode = () => {
      try {
         setValidation(true)
         search_code(code, setVal, setValidation)
      } catch (error) {
         console.log(error)
      }
   }

   const sendAgainEmail = () => {
      try{
         setLoading(true)
         send_mail__post(route.params, null, setLoading)
      }
      catch(err){
         console.log(err)
      }
   }

   return (
      <ImageBackground source={Background} style={style.container}>
         {val && navigation.navigate('Register Info', route.params)}
         <View>
            {/*////////////>> TITLE <</////////////*/}
            <Text style={style.mainTitle}>Authentication Code</Text>

            {/*////////////>> INPUT <</////////////*/}
            <TextInput onChangeText={hOnCh_code} keyboardType='numeric' 
            editable name='documentNumber' style={style.input}/>

            {/*////////////>> BUTTON VALIDATE <</////////////*/}
            <Button title='Confirm' onPress={validationCode} loading={loadingValidation}
            titleStyle={style.appButtonText}
            buttonStyle={style.appButtonContainer}/>


            {/*////////////>> BUTTON SEND AGAIN <</////////////*/}
            <Text style={style.subTitle}>Didn't you get the code?</Text>
            <Button title='Send Code Again' onPress={sendAgainEmail} loading={loading}
            titleStyle={style.appButtonTextAgain}
            buttonStyle={style.appButtonContainerAgain}/>

         </View>
      </ImageBackground>
   );
}
