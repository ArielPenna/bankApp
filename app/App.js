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
          <Stack.Screen name='Home' component={render.Home}/>
          <Stack.Screen name='Main' component={render.Main}/>
          <Stack.Screen name='Register' component={render.Register_One}/>
          <Stack.Screen name='Register_Two' component={render.Register_Two}/>
          <Stack.Screen name='Login' component={render.Login}/>
          <Stack.Screen name='Account' component={render.Account}/>
          <Stack.Screen name='Recharge' component={render.Recharge}/>
          <Stack.Screen name='SendMoney' component={render.SendMoney}/>
          <Stack.Screen name='Statistics' component={render.Statistics}/>
          <Stack.Screen name='Transactions' component={render.Transactions}/>
          <Stack.Screen name='Code' component={render.Code}/>

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
