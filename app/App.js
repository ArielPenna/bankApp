/////////////>> MODULES <<//////////
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

////////////>> SCRIPTS <<//////////
import store from "./redux/store";
import Drawer from "./navigation/navigator/Drawer"

export default function App({navigation}) {
  console.log(navigation)
  return (
    <Provider store={store}>
      <NavigationContainer>
<<<<<<< HEAD
          <Drawer/>  
=======
        <Drawer/>  
>>>>>>> 0bfab3469d743d8a04176c1c7d2fb4d26aa46f34
      </NavigationContainer>
    </Provider>
  );
}