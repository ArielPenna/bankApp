import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ImageBackground} from 'react-native';

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
          <Button title="MAIN" color="purple" onPress={() => navigation.navigate('Main')} />
        </View>
      </View>      
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {     
    flex:1,   
    width: "100%",
    height: "100%",
    alignContent:"center",    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#79d8aa",
  },
  img:{    
    alignSelf:"center",
    width:200,
    height:200,
    marginTop: 50,
    marginBottom:80,
  },
  mainTitle:{
    fontSize: 24,
    color:"white",
    fontWeight: 8,
    textAlign:"center",
  }
 
});