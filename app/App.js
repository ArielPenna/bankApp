import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import store from './redux/store'
import * as render from './components/imports/AppImpots'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
         {/* <Stack.Screen name='Home' component={render.Home} />*/}
          <Stack.Screen name='Register' component={render.Register} />
          <Stack.Screen name='Main' component={render.Main} />
          <Stack.Screen name='Login' component={render.Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
