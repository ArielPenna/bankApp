import React from "react";
import { Button, View, SafeAreaView, Text, Image, ImageBackground, TouchableHighlight} from "react-native";
import styles from "./styles/HomeStyle";

///////////////////>> IMAGES <<///////////////////
import Background from "../../../assets/background.png";
import Logo from "../../../assets/logo.png";

const Separator = () => <View style={styles.separator} />;

export default ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      
      <View>
        <Text style={styles.mainTitle}>BankApp Me!</Text>
        <Image style={styles.img} source={Logo} />
        <View>
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Login")}>             
            <Text style={styles.buttonText}>ENTER</Text>            
          </TouchableHighlight>          
          <Separator/>
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Register")}>             
            <Text style={styles.buttonText}>REGISTER</Text>            
          </TouchableHighlight>         
          
        </View>
      </View>
      
      </ImageBackground>
  );
};
