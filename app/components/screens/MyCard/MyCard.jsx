import React, { useEffect, useState } from "react";
import {View, TouchableHighlight, Text, Image, ImageBackground} from 'react-native';
import styles from './MyCardStyle'
import Background from '../../../assets/background.png'
import Tarjeta from '../../../assets/tarjeta.png'
import Saldo from "../../../assets/saldo.png"


export default ({ navigation, route }) => {
  const Separator = () => <View style={styles.separator} />;
  const [change, setChange] = useState("")   
  const { user } = route.params;

  console.log("userCard", user)

  const NumCardJoin = user.account.numCard;
  var numCard = NumCardJoin.slice(0, 4) + " " + NumCardJoin.slice(4, 8) + " " + NumCardJoin.slice(8, 12) + " " + NumCardJoin.slice(12, 16);
  
  useEffect(() => {
    setChange("")    
  }, [change]);

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.mainTitle}>My Card</Text>   
        <Separator/>
        <Image style={styles.img} source={Tarjeta} />        
        <View style={styles.dataView}>
          <Text style={styles.cardNumber} color="white">{numCard}</Text>
          <Text style={styles.cardNumber} color="white">Expiration: 10/24</Text>
          <Text style={styles.cardNumber} color="white">{user.firstName +" "+user.lastName}</Text>
        </View>        
      </View>      
      {/* <Separator/> */}
      <TouchableHighlight onPress={() => navigation.navigate("Recharge", {chng:setChange})}>
        <View style={styles.touch}>
          <Image style={styles.ico} source={Saldo} />
          <Text >Recharge</Text>
        </View>
      </TouchableHighlight>
    </ImageBackground>
  )
}
