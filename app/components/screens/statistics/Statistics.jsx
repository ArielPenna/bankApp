/////////////>> MUDULES <<///////////////
import React from "react";
import { View, Text, Image, ImageBackground, TouchableHighlight } from "react-native";
//import { PieChart } from 'react-native-svg-charts'

////////////>> SCRIPTS <<//////////////
import styles from "./styles/StatisticsStyle";

////////////>> IMGS <<//////////////
import Background from "../../../assets/background.png";
import Transactions from "../../../assets/transacciones.png"
import MyProducts from "../../../assets/productos.png"

const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route }) => {

  /////////>> PARAMS <</////////////
  const { fullBalance } = route.params;
  const { user } = route.params;

  ////////>> STATE <<//////////
  const data = [fullBalance.credit,fullBalance.debit]

  ///////>> SUPPORT <<////////////
  ///-------> VARS <-------///
  const color = ["green", "red"]

  ///-------> FUNCTIONS <-------///
  const pieData = data.filter((value) => value > 0).map((value, index) => (
    {value, svg: {fill: color[index]}, key: `pie-${index}`}));   

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        
        {/*///////////////>> TITLE <<////////////*/}
        <Text style={styles.centerText}>Statistics</Text>

        {/*///////////////>> BUTTONS TIME <<////////////*/}
        <View style={[styles.row, styles.top]}>

          {/*///---------->> MONTH <<----------///*/}
          <TouchableHighlight onPress={ ()=>console.log("Mont")}>
            <View style={styles.touch}>
              <Text style={styles.small}>6 Month</Text>
            </View>
          </TouchableHighlight>

          {/*///---------->> WEEK <<----------///*/}
          <TouchableHighlight onPress={ ()=>console.log("Week")}>
            <View style={styles.touch}>
              <Text style={styles.small}>12 Week</Text>
            </View>
          </TouchableHighlight>

          {/*///---------->> DAY <<----------///*/}
          <TouchableHighlight onPress={ ()=>console.log("Day")}>
            <View style={styles.touch}>
              <Text style={styles.small}>30 Day</Text>
            </View>
          </TouchableHighlight>
        </View>

        {/*///////////////>> STATISTIC <<////////////*/}
        <View style={styles.generalView}>
          {/*<PieChart style={{ height: 200 }} data={pieData}/>*/}
          <Text style={styles.centerText}>Income ${fullBalance.credit ? fullBalance.credit : '0000'}   Outcome ${fullBalance.debit} </Text>
        </View>

        <Separator />

        {/*///////////////>> BUTTONS <<////////////*/}
        <View style={styles.row}>

          {/*///---------->> TRANSACTIONS <<----------///*/}
          <TouchableHighlight onPress={() => navigation.navigate("Transactions")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Transactions}/>
              <Text style={styles.small}>Transactions</Text>
            </View>
          </TouchableHighlight>

          {/*///---------->> MY PRODUCTS <<----------///*/}
          <TouchableHighlight onPress={() => navigation.navigate("MyProducts", {user:user})}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={MyProducts} />
              <Text style={styles.small}>My Products</Text>
            </View>
          </TouchableHighlight>
        </View>

        {/*/////////////////////////////////////////*/}
      </View>
    </ImageBackground>
  );
};
