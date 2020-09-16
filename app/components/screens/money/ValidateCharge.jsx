import React from 'react';
import { View, Text, ImageBackground, Button} from 'react-native';
// import styles from './styles/HomeStyle'
import style from '../money/styles/ValidateStyles'
import Background from '../../../assets/background.png'


export default ({ route ,navigation }) => {

  function updateWallet(){
    route.params.ch("Change")
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