import React from "react";
import { Button, View, SafeAreaView, Text, Image, ImageBackground, TouchableHighlight} from "react-native";
import styles from "./styles/HomeStyle";

///////////////////>> IMAGES <<///////////////////
import Background from "../../../assets/background.png";
import Logo from "../../../assets/logo.png";

export default ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>BankApp Me!</Text>
        <Image style={styles.img} source={Logo} />
        <View>
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Login")}>             
            <Text style={styles.buttonText}>INGRESAR</Text>            
          </TouchableHighlight>          
          <br />
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Register")}>             
            <Text style={styles.buttonText}>REGISTRARSE</Text>            
          </TouchableHighlight>         

          <Text>Botones de testeo de componentes</Text>

          <Button title="Validation" color="purple" onPress={() => navigation.navigate("Code")} />
        </View>
      </View>
    </ImageBackground>
  );
};
