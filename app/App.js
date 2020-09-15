import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./redux/store";
import * as render from "./components/imports/AppImpots";

const Stack = createStackNavigator();

const headerOptions = {
  headerTintColor: "#752667",
  headerStyle: {
    backgroundColor: "#f7b700",
    height: 30,
  },
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={render.Register_One} options={headerOptions} />
          <Stack.Screen name="Next Register" component={render.Register_Two} options={headerOptions} />
          <Stack.Screen name="Home" component={render.Home} options={headerOptions} />
          <Stack.Screen name="Main" component={render.Main} options={headerOptions} />
          <Stack.Screen name="Login" component={render.Login} options={headerOptions} />
          <Stack.Screen name="Account" component={render.Account} options={headerOptions} />
          <Stack.Screen name="Recharge" component={render.Recharge} options={headerOptions} />
          <Stack.Screen name="SendMoney" component={render.SendMoney} options={headerOptions} />
          <Stack.Screen name="Statistics" component={render.Statistics} options={headerOptions} />
          <Stack.Screen name="misproductos" component={render.misproductos} options={headerOptions} />
          <Stack.Screen name="Transactions" component={render.Transactions} options={headerOptions} />
          <Stack.Screen name="Code" component={render.Code} options={headerOptions} />
          <Stack.Screen name="mitarjeta" component={render.mitarjeta} options={headerOptions} />
          <Stack.Screen name="miscontactos" component={render.miscontactos} options={headerOptions} /> 

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#79d8aa",
    alignItems: "center",
    justifyContent: "center",
  },
});
