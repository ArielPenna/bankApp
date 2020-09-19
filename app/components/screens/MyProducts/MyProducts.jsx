import React from "react";
import { Button, View, SafeAreaView, Text, Image, ImageBackground, TouchableHighlight } from "react-native";
import styles from "./MyProductsStyles";
import Background from "../../../assets/background.png";

const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route }) => {
  const { user } = route.params;
  
  
  
  return (
    <ImageBackground source={Background} style={styles.container}>
        

<View>
        <Text style={styles.centerText}>Mis Productos</Text>

        <Separator />

        <View style={styles.misproductos}>
          <TouchableHighlight onPress={() => navigation.navigate("Account")}>
            <View style={styles.misproductosrectangulo}>
              <Image style={styles.imgmiscuentas} source={require("../../../assets/micuenta.png")} />
              <Text style={styles.textmicuentas}>Mi Cuenta</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate("mitarjeta",{user:user})}>
            <View style={styles.misproductosrectangulo}>
              <Image style={styles.imgmiscuentas} source={require("../../../assets/mitarjeta.png")} />
              <Text style={styles.textmicuentas}>Mi tarjeta</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate("MyContact")}>
            <View style={styles.misproductosrectangulo}>
              <Image style={styles.imgmiscuentas} source={require("../../../assets/miscontactos.png")} />
              <Text style={styles.textmicuentas}>Mis Contactos</Text>
            </View>
          </TouchableHighlight>
         
        </View>
      </View>
    </ImageBackground>
  );
};
