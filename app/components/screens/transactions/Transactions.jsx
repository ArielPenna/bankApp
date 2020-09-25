/////////////>> MODULES <<//////////////
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import { View, Text, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements';

/////////////>> SCRIPTS <<//////////////
import {transactions_get} from '../../../redux/actions';

/////////////>> IMGS <<//////////////
import Background from '../../../assets/background.png'

export default ({ navigation }) => {

  const dispatch= useDispatch()

  /////////>> STATE REDUX <<///////
  const transactions= useSelector(state => state.transactions) 
  
  useEffect(()=>{
    dispatch (transactions_get())// Bringing the transactions from the user
  },[])

  return (    
    <ImageBackground source={Background} style={{flex:1}}>      
      <View>
        {/*////////>> TITLE <</////////*/}
        <Text>Transactions</Text>         
        
        {/*////////>> CARD TRANSACTION <</////////*/}        
        {transactions.length ? transactions.map((tran)=>{
        return (
            <Card>
              <Card.Title>My transactions</Card.Title>
              <Card.Divider/>
              <View >
                <Text>{tran.debit ? '-' + tran.value : '+' + tran.value}</Text>
              </View>
            </Card> 
          )
        }) :         
        <Text>You haven't made any transactions yet</Text>}
        {/* If the transactions.length is equal to 0 print this message */}
        
      </View>   
    </ImageBackground>
  )
}