import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ImageBackground} from 'react-native';
import styles from './styles/MainStyle'

export default ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.container}>
      <View>
        <View>
          <Text style={styles.mainTitle} >Nombre Usuario</Text>
          <View style={styles.row}>
            <Image style={styles.img} source={require('../../assets/avatar.jpg')}/>
            <Text style={styles.money} >$584652</Text>          
          </View>
        </View>
        <View style={styles.generalView}>
          <Text>General</Text>
          <View style={styles.row}>
            <View>
              <Text>Ingresos</Text>
              <Text>$5400</Text>
            </View>
            <View>
              <Text>Gastos</Text>
              <Text>$5400</Text>
            </View>
          </View>
          <Text>Selector de periodo</Text>  
        </View>  
        <View style={styles.row}>
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />  
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />
        </View>      
        <View style={styles.row}>
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />        
        </View>      
      </View>      
    </ImageBackground>
  )
}


