/////////>> MODULES <<///////
import React from "react";
import { View, Text, Image, ImageBackground, TouchableHighlight } from "react-native";

///////>> SCRIPTS <<///////
import styles from "./styles/Quotes";

///////>> IMGS <<////////
import Background from "../../../assets/background.png";

/* const apibtc = `https://api.bitfinex.com/v1/pubticker/btcusd`;
const req = new Request(apibtc);
/* const res = await req.loadJSON(); */

export default ({ navigation, route }) => {

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Text></Text>
      </View>
    </ImageBackground>
  );
};
