/////////>> MODULES <<///////
import React from "react";
import { View, Text, Image, ImageBackground, TouchableHighlight } from "react-native";
import { useRoute } from '@react-navigation/native'

///////>> SCRIPTS <<///////
import styles from "./styles/MyProductsStyles";

///////>> IMGS <<////////
import Background from "../../../assets/background.png";
import MyAccount from "../../../assets/micuenta.png"
import MyCard from "../../../assets/mitarjeta.png"
import MyContacts from "../../../assets/miscontactos.png"

const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route }) => {
  const { user, chng, total,  } = route.params;  

  const toMyAccount = {
    name: `${user.firstName} ${user.lastName}`, 
    cvu: user.account.cvu
  }
  
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <View style={styles.misproductos}>
          {/*///////////////>> BUTTON MY ACCOUNT <</////////////*/}
          <TouchableHighlight onPress={() => navigation.navigate("Account", toMyAccount)}>
            <View style={styles.misproductosrectangulo}>
              <Image style={styles.imgmiscuentas} source={MyAccount} />
              <Text style={styles.textmicuentas}>Mi Cuenta</Text>
            </View>
          </TouchableHighlight>
        
          {/*///////////////>> BUTTON MY CARD <</////////////*/}
          <TouchableHighlight onPress={() => navigation.navigate("MyCard",{user:user})}>
            <View style={styles.misproductosrectangulo}>
              <Image style={styles.imgmiscuentas} source={MyCard} />
              <Text style={styles.textmicuentas}>Mi tarjeta</Text>
            </View>
          </TouchableHighlight>

          {/*///////////////>> BUTTON MY CONTACT <</////////////*/}
          <TouchableHighlight onPress={() => navigation.navigate("MyContact", {chng, total})}>
            <View style={styles.misproductosrectangulo}>
              <Image style={styles.imgmiscuentas} source={MyContacts} />
              <Text style={styles.textmicuentas}>Mis Contactos</Text>
            </View>
          </TouchableHighlight>



        </View>
      </View>
    </ImageBackground>
  );
};
