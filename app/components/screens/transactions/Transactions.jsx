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

import styles from "./styles/Transactions";

export default ({ navigation }) => {

/////////>> STATE REDUX <<///////
const transactions= useSelector(state => state.transactions) 
const Separator = () => <View style={styles.separator} />;

  return (    
    <ImageBackground source={Background} style={styles.container}>      
      <View>
        <Separator />        
        
        {/*////////>> CARD TRANSACTION <</////////*/}        
        {transactions.length ? transactions.map((tran)=>{
              switch (tran.transactions_type) {
                case 'transferencia bancaria':
                  return (
                    <Card>
                      <Card.Title>Transference:</Card.Title>
                      <View style={styles.row}>
                        <Image source={require('../../../assets/transacciones.png')} style={styles.img}/>
                        <Text style={styles.amount}>{'-' + tran.value}</Text>
                      </View>
                    </Card>
                    );
                case 'pago comercio':
                  return (
                    <Card>
                      <Card.Title>Payments:</Card.Title>
                      <View style={styles.row}>
                        <Image source={require('../../../assets/mitarjeta.png')} style={styles.img}/>
                        <Text style={styles.amount}>{'-' + tran.value}</Text>
                      </View>
                    </Card>
                    );
                case 'transferencia a usuario':
                  return (
                    <Card>
                      <Card.Title>Send to a friend:</Card.Title>
                      <View style={styles.row}>
                        <Image source={require('../../../assets/enviarDinero.png')} style={styles.img} />
                        <Text style={styles.amount}>{'-' + tran.value}</Text>
                      </View>
                    </Card>
                    );
                case 'recarga billetera':
                  return (
                    <Card>
                      <Card.Title>Recharge:</Card.Title>
                      <View style={styles.row}>
                        <Image source={require('../../../assets/favicon.png')} style={styles.img} />
                        <Text style={styles.amount}>{'+' + tran.value}</Text>
                      </View>
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