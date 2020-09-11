import React from 'react';
import { Button, View, SafeAreaView, Text, Image, ImageBackground} from 'react-native';
import styles from './styles/HomeStyle'


export default ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.container}>
      <View>
        <Text style={styles.mainTitle} >BankApp Me!</Text>
        <Image 
          style={styles.img}
          source={require('../../assets/logo.png')} />
        <View >
          <Button title="LOGIN" color="purple" onPress={() => navigation.navigate('Login')} />
          <br/>
          <Button title="REGISTER" color="purple" onPress={() => navigation.navigate('Register')} />

          <Text>Botones de testeo de componentes</Text>
          <Button title="MAIN" color="purple" onPress={() => navigation.navigate('Main')} />
        </View>
      </View>      
    </ImageBackground>
  )
}


