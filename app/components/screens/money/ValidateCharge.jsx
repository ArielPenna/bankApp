import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Button, TouchableHighlight} from 'react-native';
import { useDispatch } from "react-redux";
import {recharge_wallet, transactions_get, get_user__me} from "../../../redux/actions"


import style from '../money/styles/ValidateStyles'
import Background from '../../../assets/background.png'


export default ({ route ,navigation }) => {
  const dispatch = useDispatch()

  const {balance} = route.params

  const [change, setChange] = useState(false)

  function updateWallet(){
    recharge_wallet({balance}, setChange)
  }

  useEffect(()=>{
    if(change){
      dispatch(get_user__me())
      dispatch(transactions_get())
      setChange(false)
      navigation.navigate('Main')
    }
  }, [change])
    

  return (
  <ImageBackground source={Background} style={style.container}>
    
    <View style={style.container2}>
      
        <Text style={style.text}>Use this code whenever you want to deposit money in your Account.
          The minimum amount is $50.
        </Text>

        <Text style={style.numValidation}>
          8833344526
        </Text>
    
        <Text style={style.text2}>
        Show this code to the cashier at RapiPago or PagoFácil
        </Text>
        <TouchableHighlight onPress={updateWallet} style={style.btn}>
                <Text style={style.appButtonText}> NEXT </Text>
        </TouchableHighlight>
        
    </View>

    </ImageBackground>
  )
}