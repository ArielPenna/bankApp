/////////////>> MODULES <<//////////
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

////////////>> SCRIPTS <<//////////
import store from "./redux/store";
import Drawer from "./navigation/navigator/Drawer"

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer/>  
      </NavigationContainer>
    </Provider>
  );
}