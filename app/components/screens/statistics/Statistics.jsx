/////////////>> MUDULES <<///////////////
import React, {useState} from "react";
import { View, Text, Image, ImageBackground, TouchableHighlight } from "react-native";
import { PieChart } from 'react-native-svg-charts'

////////////>> SCRIPTS <<//////////////
import styles from "./styles/StatisticsStyle";

////////////>> IMGS <<//////////////
import Background from "../../../assets/background.png";
import Transactions from "../../../assets/transacciones.png"
import MyProducts from "../../../assets/productos.png"

const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route }) => {

  /////////>> PARAMS <</////////////
  const { fullBalance, user, transactions } = route.params;
  ////////>> STATE <<//////////
  const data = [fullBalance.credit,fullBalance.debit]

  ///////>> SUPPORT <<////////////

  const sixMonth = new Date().getMonth()-5

  const threeMonth = new Date().getMonth()-2

  const oneMonth = new Date().getMonth()

  ///-------> VARS <-------///
  const color = ["green", "red"]

  ///-------> FUNCTIONS <-------///
  const pieData = data.filter((value) => value > 0).map((value, index) => (
    {value, svg: {fill: color[index]}, key: `pie-${index}`}));   

  const months = (m, type, indexC ) => {
    const value = transactions.map( t => {
    const month = parseInt(t.updatedAt.split("-")[1])
    
    if (t[type] === user?.account.accountId && month >= m) {
      return parseFloat(t.value)
    }
    return 0
  }).reduce((e, f) => e + f)
  return {value, svg: {fill: color[indexC]}, key: `pie-${indexC}`}
  }
  
  const pieDataSixMonth = [months(sixMonth, "deposit", 0), months(sixMonth, "debit", 1)]
  
  const pieDataThreeMonth = [months(threeMonth, "deposit", 0), months(threeMonth, "debit", 1)]

  const pieDataOneMonth = [months(oneMonth, "deposit", 0), months(oneMonth, "debit", 1)]
  
  const [pie, setPie] = useState(pieData)

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
      <Separator />       

        {/*///////////////>> BUTTONS TIME <<////////////*/}
        <View style={[styles.row, styles.top]}>

          {/*///---------->> MONTH <<----------///*/}
          <TouchableHighlight onPress={ ()=>{setPie(pieDataSixMonth)}}>
            <View style={styles.touch}>
              <Text style={styles.small}>6 Months</Text>
            </View>
          </TouchableHighlight>

          {/*///---------->> WEEK <<----------///*/}
          <TouchableHighlight onPress={ ()=>{setPie(pieDataThreeMonth)}}>
            <View style={styles.touch}>
              <Text style={styles.small}>3 Months</Text>
            </View>
          </TouchableHighlight>

          {/*///---------->> DAY <<----------///*/}
          <TouchableHighlight onPress={ ()=>{setPie(pieDataOneMonth)}}>
            <View style={styles.touch}>
              <Text style={styles.small}>One Month</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={ ()=>{setPie(pieData)}}>
            <View style={styles.touch}>
              <Text style={styles.small}>All</Text>
            </View>
          </TouchableHighlight>
        </View>

        {/*///////////////>> STATISTIC <<////////////*/}
        <View style={styles.generalView}>
          <PieChart style={{ height: 200 }} data={pie}/>
          <Text style={styles.income}>Income ${fullBalance.credit ? fullBalance.credit : '0000'}</Text>
          <Text style={styles.outcome}>Outcome ${fullBalance.debit} </Text>
        </View>

        <Separator />

        {/*/////////////////////////////////////////*/}
      </View>
    </ImageBackground>
  );
};
