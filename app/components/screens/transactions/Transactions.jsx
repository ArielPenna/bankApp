/////////////>> MODULES <<//////////////
import React, { useState } from 'react';
import {useSelector} from 'react-redux'; 
import { View, Text, Image, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements';

///////////>> SCRIPTS <<//////////
import Pagination from '../../support/Pagination'

/////////////>> IMGS <<//////////////
import Background from '../../../assets/background.png'
import Transactions from '../../../assets/transacciones.png'
import MyCard from '../../../assets/mitarjeta.png'
import SendMoney from '../../../assets/enviarDinero.png'
import Favicon from '../../../assets/favicon.png'

import styles from "./styles/Transactions";

const Separator = () => <View style={styles.separator} />;

export default ({ route }) => {

  //const { user } = route.params
/////////>> STATE REDUX <<///////
const transactions= useSelector(state => state.transactions)

//////------->> PAGINATION  <<------------//////
////////>> STATES <<//////////
const [currentPage, setCurrent] = useState(1)
const [ByPage] = useState(5)

const tran = [1,2,3,4,5,6,7,8,9,1,2,3,5,6,7,8,6,7,8,9,7,6,5,4,3,2,3,4,5,6,1,2,3,4,5,6,7,8,6]
///////>> VARS <</////////
const total = tran.length
const last = currentPage * ByPage
const first = last - ByPage
const current = tran.slice(first, last)

//////>> FUNCTIONS  <<//////
const changePage = (e) => {
  setCurrent(e)
}

/////////-------------------------------------/////

  return (    
    <ImageBackground source={Background} style={styles.container}>      
      <View>
        <Separator />        

        {/*////////>> CARD TRANSACTION <</////////*/}        
        {current.length ? current.map((tran)=>{
              switch (tran.transactions_type) {
                case 'transferencia bancaria':
                  return (
                    <Card>
                      <Card.Title style={{marginRight: 200, width:'100%'}}>Transference              {tran?.createdAt.split('T')[0]}</Card.Title>
                      <View style={styles.row}>
                        <Image source={Transactions} style={styles.img}/>
                        <Text style={styles.amount, styles.outcome}>{'-' + tran.value}</Text>
                      </View>
                    </Card>
                    );
                case 'pago comercio':
                  return (
                    <Card>
                      <Card.Title style={{marginRight: 200, width:'100%'}}>Payments              {tran?.createdAt.split('T')[0]}</Card.Title>                      
                      <View style={styles.row}>
                        <Image source={MyCard} style={styles.img}/>
                        <Text style={styles.amount, styles.outcome}>{'-' + tran.value}</Text>
                        <Text style={styles.amount}>{tran?.debitName}</Text>
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
			
                      {tran?.debit !==user?.account.accountId
                        ? <Text style={styles.amount, styles.income} >+ {tran.value}</Text>
                        : <Text style={styles.amount, styles.outcome}>- {tran.value}</Text>}
                      {tran?.depositName !== `${user.firstName} ${user.lastName}`
                            ? <Text style={styles.name}>{tran?.depositName}</Text>
                            : <Text style={styles.name}>{tran?.debitName}</Text>}
                      </View>
                    </Card>
                    );
                case 'recarga billetera':
                  return (
                    <Card>
                      <Card.Title style={{marginRight: 200, width:'100%'}}>Recharge              {tran?.createdAt.split('T')[0]}</Card.Title>
                      <View style={styles.row}>
                        <Image source={Favicon} style={styles.img} />
                        <Text style={styles.amount, styles.income}>{'+' + tran.value}</Text>
                      </View>
                    </Card>
                  );
              }
            }) :         
        <Text style={styles.withoutTrans}>You haven't made any transactions yet</Text>}
        {/* If the transactions.length is equal to 0 print this message */}    
        
        {current.map(t => {
          return (
            <Card>
              <Card.Title style={{marginRight: 200, width:'100%'}}>Recharge              X</Card.Title>
              <View style={styles.row}>
                <Image source={Favicon} style={styles.img} />
                <Text style={styles.amount, styles.income}>{'+' + t}</Text>
              </View>
            </Card>
          );
        })}

        {tran.length > 5 && <Pagination value={{total, ByPage, changePage, currentPage}}/>}
      </View>   
    </ImageBackground>
  )
}
