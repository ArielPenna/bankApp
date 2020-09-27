/////////////>> MODULES <<//////////////
import React from 'react';
import {useSelector} from 'react-redux'; 
import { View, Text, Image, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements';

/////////////>> IMGS <<//////////////
import Background from '../../../assets/background.png'
import '../../../assets/transacciones.png'
import '../../../assets/mitarjeta.png'
import '../../../assets/enviarDinero.png'
import '../../../assets/favicon.png'

export default ({ navigation }) => {

/////////>> STATE REDUX <<///////
const transactions= useSelector(state => state.transactions) 

  return (    
    <ImageBackground source={Background} style={{flex:1}}>      
      <View>
        {/*////////>> TITLE <</////////*/}
        <Text>Transactions</Text>         
        
        {/*////////>> CARD TRANSACTION <</////////*/}        
        {transactions.length ? transactions.map((tran)=>{
              switch (tran.transactions_type) {
                case 'transferencia bancaria':
                  return (
                    <Card>
                      <Card.Title>Transference:</Card.Title>
                      <Card.Image source={require('../../../assets/transacciones.png')} />
                      <Text>{'-' + tran.value}</Text>
                    </Card>
                    );
                case 'pago comercio':
                  return (
                    <Card>
                      <Card.Title>Payment:</Card.Title>
                      <Card.Image source={require('../../../assets/mitarjeta.png')} />
                      <Text>{'-' + tran.value}</Text>
                    </Card>
                    );
                case 'transferencia a usuario':
                  return (
                    <Card>
                      <Card.Title>Send to a friend:</Card.Title>
                      <Image source={{uri:require('../../../assets/enviarDinero.png'),
                      width: 50,
                      height: 50}} />
                      <Text>{'-' + tran.value}</Text>
                    </Card>
                    );
                case 'recarga billetera':
                  return (
                    <Card>
                      <Card.Title>Recharge:</Card.Title>
                      <Image source={{uri:require('../../../assets/favicon.png'),
                      width: 50,
                      height: 50}} />
                      <Text>{'+' + tran.value}</Text>
                    </Card>
                  );
              }
            }) :         
        <Text>You haven't made any transactions yet</Text>}
        {/* If the transactions.length is equal to 0 print this message */}
        
      </View>   
    </ImageBackground>
  )
}