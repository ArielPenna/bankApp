import React from 'react';
import { View, Text, ImageBackground, Button} from 'react-native';
import { useDispatch } from "react-redux";
import {recharge_wallet} from "../../../redux/actions"


import style from '../money/styles/ValidateStyles'
import Background from '../../../assets/background.png'


export default ({ route ,navigation }) => {
  const dispatch = useDispatch()

  const {chng, balance} = route.params
  {console.log(chng)}

  function updateWallet(){
    dispatch(recharge_wallet({balance}))
    chng("Charge")
    navigation.navigate('Main')
  }

    

  return (
  <ImageBackground source={Background} style={style.container}>

      <View>
        <Text style={style.title}>Recargar Dinero</Text>   
      </View> 
    
    <View style={style.container2}>
      
        <Text style={style.text}>Usá este código siempre que quieras ingresar dinero a tu Cuenta.
          El monto minímo es $50.
        </Text>

        <Text style={style.numValidation}>
          8833344526
        </Text>
    
        <Text style={style.text}>
          Mostrale este código al cajero en RapiPago o PagoFácil
        </Text>
        <Button title="Confirmar Recarga" onPress={updateWallet}/>
        
    </View>

    </ImageBackground>
  )
}