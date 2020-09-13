import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ImageBackground} from 'react-native';

export default ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.container}>
      <View>
        <Text style={styles.mainTitle} >Nombre Usuario</Text>
        <View style={styles.user}>
          <Image 
            style={styles.img}
            source={require('../../assets/avatar.jpg')} />
          <Text>$584652</Text>
          
        </View>
        <View >
          <Button title="LOGIN" color="#ea94a0" onPress={() => navigation.navigate('Login')} />
          <br/>
          <Button title="REGISTER" color="#ea94a0" onPress={() => navigation.navigate('Register')} />
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
    
  },
  img:{    
    alignSelf:"center",
    width:70,
    height:70,    
  },
  mainTitle:{
    fontSize: 24,
    fontWeight: 8,
    textAlign:"center",
  },
  user:{
    flexDirection:"row",
  }, 
});