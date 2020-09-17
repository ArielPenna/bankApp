import React from 'react';
import { Button, View, SafeAreaView, Text, Image, ImageBackground} from 'react-native';
import styles from './MyCardStyle'
import Background from '../../../assets/background.png'
import Tarjeta from '../../../assets/tarjeta.png'



export default ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>My Card</Text>   
        <Image style={styles.img} source={Tarjeta} />
      </View>      
    </ImageBackground>
  )
}

