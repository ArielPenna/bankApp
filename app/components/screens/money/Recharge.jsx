import React from 'react';
import { Button, View, SafeAreaView, Text, TextInput, Image, ImageBackground, TouchableHighlight} from 'react-native';


import style from '../money/styles/RechargeStyles'

import Background from '../../../assets/background.png'



export default ({ route, navigation }) => {




  return (

    <ImageBackground source={Background} style={style.container}>
      <View>
        <Text style={style.title}>Recargar Dinero</Text>   
      </View> 

      
          <View style={style.containerInput}>
            <Text style={style.text}>Ingrese el monto que desea cargar</Text>

            <TextInput style={style.inputMoney} keyboardType="numeric" placeholder="Ingrese el monto"/>

            <Text style={style.text2}>A continuación será redirigido al código que deberá mostrar en un RapiPago o PagoFacil</Text>

            <TouchableHighlight onPress={()=> navigation.navigate('ValidateCharge', {ch:route.params.ch})} style={style.btn}>
                <Text style={style.appButtonText}> Siguiente </Text>
            </TouchableHighlight>

          </View>  
          
    </ImageBackground>
  )
}