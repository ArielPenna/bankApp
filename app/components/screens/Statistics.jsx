import React from "react";
import { View, Text, Image, ImageBackground, TouchableHighlight } from "react-native";
import styles from "./styles/StatisticsStyle";
import Background from "../../assets/background.png";
import { PieChart } from 'react-native-svg-charts'


const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route }) => {
  const { fullBalance } = route.params;
  const { user } = route.params;

  const data = [fullBalance.credit,fullBalance.debit]
  const color = ["green", "red"]

  const pieData = data.filter((value) => value > 0).map((value, index) => ({
      value, svg: {fill: color[index]}, key: `pie-${index}`}));   

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Text style={styles.centerText}>Statistics</Text>

        <View style={[styles.row, styles.top]}>
          <TouchableHighlight>
            <View style={styles.touch}>
              <Text style={styles.small}>1 Day</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.touch}>
              <Text style={styles.small}>1 Week</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style={styles.touch}>
              <Text style={styles.small}>1 Month</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.generalView}>
        <PieChart style={{ height: 200 }} data={pieData} />
          <Text style={styles.centerText}>Income ${fullBalance.credit}   Outcome ${fullBalance.debit} </Text>
        </View>

        <Separator />

        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("Transactions")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require("../../assets/transacciones.png")} />
              <Text style={styles.small}>Transactions</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate("MyProducts", {user:user})}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require("../../assets/productos.png")} />
              <Text style={styles.small}>My Products</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};
