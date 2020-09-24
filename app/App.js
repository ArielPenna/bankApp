import React from "react";
import { Provider } from "react-redux";
import { Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./redux/store";
import * as render from "./components/imports/AppImports";
import * as header from "./navigation/headers/Headers"

const Stack = createStackNavigator();

const headerOptions = {
  title: '',
  headerLeft: (props) => (
    <Button
    title='hola'
      onPress={() => {
        console.log('hola')
      }}
    />
  ),
  headerTintColor: "#752667",
  headerStyle: {
    backgroundColor: "#f7b700",
    height: 50,
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      
        <Stack.Navigator screenOptions={header.General}>
          {/*/////////////////////>> HOME <</////////////////////*/}          
          <Stack.Screen name="Home" component={render.Home}/>

          {/*/////////////////////>> REGISTER <</////////////////////*/}
          <Stack.Screen name='Register' component={render.Register_Email} />
          <Stack.Screen name="Code" component={render.Code} />
          <Stack.Screen name="Register Info" component={render.Register_One} />
          <Stack.Screen name="Next Register" component={render.Register_Two} />

          {/*/////////////////////>> LOGIN <</////////////////////*/}
          <Stack.Screen name="Login" component={render.Login} />

          {/*/////////////////////>> MAIN <</////////////////////*/}
          <Stack.Screen name="Main" component={render.Main} options={header.Main}/>

          {/*///////-> TRANSACTIONS <-////////*/}
          <Stack.Screen name="Transactions" component={render.Transactions} />
          
          {/*///////-> STATISTICS <-////////*/}
          <Stack.Screen name="Statistics" component={render.Statistics} />

          {/*///////-> MY PROFILE <-////////*/}
          <Stack.Screen name="MyProfile" component={render.MyProfile} />
          <Stack.Screen name="EditProfile" component={render.EditProfile} />

          {/*///////-> MY PRODUCTS <-////////*/}
          <Stack.Screen name="MyProducts" component={render.MyProducts} />

          {/*//--> MY ACCOUNT <--//*/}
          <Stack.Screen name="Account" component={render.Account} />

          {/*//--> MY CARD <--//*/}
          <Stack.Screen name="MyCard" component={render.MyCard} />

          {/*//--> MY CONTACTS <--//*/}
          <Stack.Screen name="MyContact" component={render.MyContact} />
          <Stack.Screen name="OnlyContact" component={render.OnlyContact} />
          <Stack.Screen name="Add Contact" component={render.AddContact}/>
          <Stack.Screen name="Edit Contact" component={render.EditContact} />

          {/*///////-> RECHARGE <-////////*/}
          <Stack.Screen name="Recharge" component={render.Recharge} />
          <Stack.Screen name='ValidateCharge' component={render.ValidateCharge} />

          {/*///////-> SEND MONEY <-////////*/}
          <Stack.Screen name="Send Money to Contacts" component={render.SendMoneyContacts} />
          <Stack.Screen name="Send Money" component={render.SendMoney} />      

        </Stack.Navigator>
      
      </NavigationContainer>
      </Provider>
  );
}