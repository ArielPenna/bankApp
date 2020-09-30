import React, {useState} from 'react';
import { Button, View, SafeAreaView, Text, TextInput, Image, ImageBackground, TouchableHighlight} from 'react-native';


import style from '../money/styles/RechargeStyles'

import Background from '../../../assets/background.png'



export default ({ route, navigation }) => {

  const [amount, setAmount] = useState("")

    const handleChange = e =>{
    setAmount(e.target.value)
  }

  

  return (

    <ImageBackground source={Background} style={style.container}>
      
      <View style={style.containerInput}>
        <Text style={style.text}>Enter the desired amount to recharge</Text>

        <TextInput style={style.inputMoney} onChange={handleChange}  keyboardType="numeric" placeholder="Enter the amount of money..."/>

        <Text style={style.text2}>Then you will be redirected to the code to be used in your nearest payment center</Text>

        <TouchableHighlight onPress={()=> navigation.navigate("ValidateCharge", {chng: ()=>{}, balance:amount})} style={style.btn}>
            <Text style={style.appButtonText}> NEXT </Text>
        </TouchableHighlight>

      </View>  
          
    </ImageBackground>
  )
}