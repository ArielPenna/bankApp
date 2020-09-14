import React from "react";
import { Button, View, SafeAreaView, Text, Image, ImageBackground, TouchableHighlight } from "react-native";
import styles from "./styles/StatisticsStyle";
import Background from "../../assets/background.png";

const Separator = () => <View style={styles.separator} />;

export default ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Text style={styles.centerText}>Estadisticas</Text>

        <View style={[styles.row, styles.top]}>
          <TouchableHighlight>
            <View style={styles.touch}>
              <Text style={styles.small}>1 Día</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.touch}>
              <Text style={styles.small}>7 Días</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.touch}>
              <Text style={styles.small}>30 Días</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.generalView}>
          <Text style={styles.centerText}>Aca va el grafico de estadisticas</Text>
        </View>

        <Separator />

        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("Transactions")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require("../../assets/transacciones.png")} />
              <Text style={styles.small}>Transacciones</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate("Account")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require("../../assets/productos.png")} />
              <Text style={styles.small}>Mi Cuenta</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};
