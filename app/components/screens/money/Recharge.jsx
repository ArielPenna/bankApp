import React, {useState} from 'react';
import { Button, View, SafeAreaView, Text, TextInput, Image, ImageBackground, TouchableHighlight} from 'react-native';


import style from '../money/styles/RechargeStyles'

import Background from '../../../assets/background.png'



export default ({ route, navigation }) => {

  const [amount, setAmount] = useState("")

    const handleChange = e =>{
    setAmount(e.target.value)
  }

  const {chng} = route.params


  return (

    <ImageBackground source={Background} style={style.container}>
      <View>
        <Text style={style.title}></Text>   
      </View> 

      
          <View style={style.containerInput}>
            <Text style={style.text}>Ingrese el monto que desea cargar</Text>

            <TextInput style={style.inputMoney} onChange={handleChange}  keyboardType="numeric" placeholder="Ingrese el monto"/>

            <Text style={style.text2}>A continuación será redirigido al código que deberá mostrar en un RapiPago o PagoFacil</Text>

            <TouchableHighlight onPress={()=> navigation.navigate("ValidateCharge", {chng, balance:amount})} style={style.btn}>
                <Text style={style.appButtonText}> Siguiente </Text>
            </TouchableHighlight>

          </View>  
          
    </ImageBackground>
  )
}