import React from 'react';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import { Button, View, SafeAreaView, Text, Image, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements';
import {transactions_get} from '../../redux/actions';
// import styles from './styles/HomeStyle'

import Background from '../../assets/background.png'



export default ({ navigation }) => {

  const transactions= useSelector(state => state.transactions) 
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch (transactions_get())
  })

  return (
    <ImageBackground source={Background}>
      <View>
        <Text>Transactions</Text>         
      </View>     
      <Card>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider/>
        {transactions.length && transactions.map((e)=>{
        return (
          <View >
          {/* <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          /> */}
          <Text>{e.debit ? '-' + e.value : '+' + e.value}</Text>
        </View>
        )
      }) }
      </Card> 
    </ImageBackground>
  )
}