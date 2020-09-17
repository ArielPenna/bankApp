import React from 'react';
import { Button, View, SafeAreaView, Text, Image, ImageBackground} from 'react-native';


// import styles from './styles/HomeStyle'

import Background from '../../../assets/background.png'



export default ({ navigation }) => {
  return (
    <ImageBackground source={Background}>
      <View>
        <Text>Send Money</Text>         
      </View>      
    </ImageBackground>
  )
}