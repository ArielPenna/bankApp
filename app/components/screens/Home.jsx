///////////////////>> MODULS <<///////////////////
import React from 'react';
import { Button, View, SafeAreaView, Text, Image, ImageBackground} from 'react-native';

///////////////////>> SCRIPTS <<///////////////////
import styles from './styles/HomeStyle'

///////////////////>> IMAGES <<///////////////////
import Background from '../../assets/background.png'

//////////////////////////////////////////////////

export default ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.container}>
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
          <Button title="Validation" color="purple" onPress={() => navigation.navigate('Code')} />
        </View>
      </View>      
    </ImageBackground>
  )
}


