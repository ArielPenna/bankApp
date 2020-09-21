import React from "react";
import { Button, View, SafeAreaView, Text, Image, ImageBackground, TouchableHighlight } from "react-native";
import styles from "./accountStyle";
import Background from "../../../assets/background.png";
// import styles from './styles/HomeStyle'

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerText);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

export default ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Text style={styles.centerText}>My Account</Text>         
        <View style={styles.cvuaccount}>
          
            <Text style={styles.textaccount}>Client: NAME</Text>
            <Text style={styles.textaccount}>CVU:</Text>
            <Text style={styles.textaccount} id="p1">2020202020202020202020</Text>

        </View>
      
        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require("../../../assets/asociarcvu.png")} />
              <Text style={styles.small}>associate CVU</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => copiarAlPortapapeles("p1", alert("Se ha copiado tu CVU"))}>  

            <View style={styles.touch}>
              <Image style={styles.ico} source={require("../../../assets/compartircvu.png")} />
              <Text style={styles.small}>Share cvu</Text>
            </View>
          </TouchableHighlight>
        </View>
          <View> 
              <Text>Se ha copiado tu CVU exitosamente</Text>
          </View>
      
      </View>      
      
    </ImageBackground>
  )
}

