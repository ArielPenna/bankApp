import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// importo los componentes screens

import Start from "./components/screens/Start"
import Login from "./components/screens/Login"
// import Register from "./components/screens/Register"
import Main from "./components/screens/Main"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Start' component={Start} />
        {/* <Stack.Screen name='Register' component={Register} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79d8aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
