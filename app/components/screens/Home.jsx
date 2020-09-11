import React from 'react';
import { Button, View, SafeAreaView, Text, Image} from 'react-native';
import style from './styles/HomeStyle'

export default ({ navigation }) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.mainTitle} >BankApp!</Text>
        <Image 
          style={style.img}
          source={require('../../assets/logo.png')} />
        <View >
          <Button title="LOGIN" color="#ea94a0" onPress={() => navigation.navigate('Login')} />
          <br/>
          <Button title="REGISTER" color="#ea94a0" onPress={() => navigation.navigate('Register')} />
        </View>
      </View>      
    </View>
  )
}


