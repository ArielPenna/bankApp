/////////////>> MODULES <<//////////////
import React from 'react';
import {useSelector} from 'react-redux'; 
import { View, Text, Image, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements';

/////////////>> IMGS <<//////////////
import Background from '../../../assets/background.png'
import Transactions from '../../../assets/transacciones.png'
import MyCard from '../../../assets/mitarjeta.png'
import SendMoney from '../../../assets/enviarDinero.png'
import Favicon from '../../../assets/favicon.png'

import styles from "./styles/Transactions";

export default ({ route }) => {

  //const { user } = route.params
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
                      <Card.Title style={{marginRight: 200, width:'100%'}}>Transference              {tran?.createdAt.split('T')[0]}</Card.Title>
                      <View style={styles.row}>
                        <Image source={Transactions} style={styles.img}/>
                        <Text style={styles.amount}>{'-' + tran.value}</Text>
                      </View>
                    </Card>
                    );
                case 'pago comercio':
                  return (
                    <Card>
                      <Card.Title style={{marginRight: 200, width:'100%'}}>Payments              {tran?.createdAt.split('T')[0]}</Card.Title>                      
                      <View style={styles.row}>
                        <Image source={MyCard} style={styles.img}/>
                        <Text style={styles.amount}>{'-' + tran.value}</Text>
                        <Text style={styles.amount}>{tran?.name}</Text>
                      </View>
                    </Card>
                    );
                case 'transferencia a usuario':
                  var icon = '-'
                  if(tran.debit !== user?.account.accountId) icon = '+'
                  return (
                    <Card>
                      <Card.Title style={{marginRight: 200, width:'100%'}}>Send to a friend              {tran?.createdAt.split('T')[0]}</Card.Title>
                      <View style={styles.row}>
                        <Image source={SendMoney} style={styles.img} />
                        <Text style={styles.amount}>{icon + tran.value}</Text>
                        <Text style={styles.amount}>{tran?.name}</Text>
                      </View>
                    </Card>
                    );
                case 'recarga billetera':
                  return (
                    <Card>
                      <Card.Title style={{marginRight: 200, width:'100%'}}>Recharge              {tran?.createdAt.split('T')[0]}</Card.Title>
                      <View style={styles.row}>
                        <Image source={Favicon} style={styles.img} />
                        <Text style={styles.amount}>{'+' + tran.value}</Text>
                      </View>
                    </Card>
                  );
              }
            }) :         
        <Text style={styles.withoutTrans}>You haven't made any transactions yet</Text>}
        {/* If the transactions.length is equal to 0 print this message */}       
      </View>   
    </ImageBackground>
  )
}