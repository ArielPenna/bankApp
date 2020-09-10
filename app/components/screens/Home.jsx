import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default ({ navigation }) => {
  return (
    <View styles={styles.container}>
      {/*<Button title="LOGIN" color="#ea94a0" onPress={() => navigation.navigate('Login')} />*/}
      <Button title="REGISTER" color="#ea94a0" onPress={() => navigation.navigate('Register')} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  title: {
    flex: 1,
    width: 160,
    margin: 20,
  }
});