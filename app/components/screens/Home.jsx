import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image} from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle} >BankApp!</Text>
        <Image 
          style={styles.img}
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


const styles = StyleSheet.create({
  container: {     
    flex:1,   
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
    fontWeight: 8,
    textAlign:"center",
  }
 
});