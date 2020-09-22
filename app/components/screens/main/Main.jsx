import React, {useEffect, useState} from "react";
import { Button, View, SafeAreaView, Text, Alert, Image, ImageBackground, TouchableHighlight } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/MainStyle";
import {get_user__me, transactions_get, full_balance_get} from "../../../redux/actions"

///////////////////>> IMGS <<///////////////////
import Background from "../../../assets/background.png";
import Avatar from "../../../assets/avatar.jpg";
import Transacciones from "../../../assets/transacciones.png";
import Estadisticas from "../../../assets/estadisticas.png";
import Productos from "../../../assets/productos.png";
import Saldo from "../../../assets/saldo.png";
import EnviarDinero from "../../../assets/enviarDinero.png";
import MyProfile from "../../../assets/datos.png";

const Separator = () => <View style={styles.separator} />;

export default ({ navigation }) => {

  const dispatch = useDispatch()

  ///////>> STATE REDUX <<///////////
  const user = useSelector((state) => state.user);   
  const fullBalance = useSelector((state) => state.fullBalance);

  //////>> STATE <<///////
  const [change, setChange] = useState("")
  const [changeTransaction, setChangeTran] = useState("")
  
  /////>> USE EFFECT <<///////
  useEffect(() => {
    dispatch(get_user__me()) //Dispatch to bringing the user active      
    setChange("")
  }, [change]);

  useEffect(()=>{
    dispatch(transactions_get())//Dispatch to bringing the transactions from the user 
    setChangeTran() 
  }, [changeTransaction])

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        {/*////////////////////>> TOP <<////////////////*/}
        <View style={styles.top}>
          <View style={styles.row}>
            <View>
              {/*//////////////--->>>> PROFILE <<<<---///////////*/}
              <Text style={styles.mainTitle}>Hello, {user?.firstName}</Text>
              <Image style={styles.img} source={Avatar} />
            </View>
            {/*//////////////--->>>> TOTAL WALLET <<<<---///////////*/}
            <Text style={styles.money}>$ {fullBalance?.total ? fullBalance.total : '0000'} </Text>
          </View>
        </View>

        <Separator />

        {/*////////////////////>> MID <<////////////////*/}
        <View style={styles.generalView}>

          {/*//////////////--->>>> TITLE <<<<---///////////*/}
          <Text style={styles.centerText}>General</Text>
          <View style={styles.row}>
            <View style={styles.margin}>

              {/*//////////////--->>>> INCOME <<<<---///////////*/}
              <Text style={styles.centerText}>Income</Text>
              <Text style={styles.bigText}>$ {fullBalance?.credit ? fullBalance.credit : '0000'}</Text>
            </View>
            <View style={styles.margin}>

              {/*//////////////--->>>> OUTCOME <<<<---///////////*/}
              <Text style={styles.centerText}>Outcome</Text>
              <Text style={styles.bigText}>$ {fullBalance?.debit ? fullBalance.debit : '0000'}</Text>
            </View>
          </View>
          {/* <Text style={styles.centerText}>1 Día 7 Días 30 Días</Text> */}
        </View>
        
        <Separator />

        {/*////////////////////>> BOT <<////////////////*/}
        <View style={styles.row}>

          {/*//////////////--->>>> BUTTON TRANSACTIONS <<<<---///////////*/}
          <TouchableHighlight onPress={() => navigation.navigate("Transactions")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Transacciones} />
              <Text style={styles.small}>Transactions</Text>
            </View>
          </TouchableHighlight>

          {/*//////////////--->>>> BUTTON STATISTICS <<<<---///////////*/}
          <TouchableHighlight onPress={() => navigation.navigate("Statistics", {fullBalance, user})}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Estadisticas} />
              <Text style={styles.small}>Statistics</Text>
            </View>
          </TouchableHighlight>

          {/*//////////////--->>>> BUTTON MY PROFILE <<<<---///////////*/}
          <TouchableHighlight onPress={() => navigation.navigate('MyProfile', {user: user, editProfile: setChange})}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={MyProfile}/>
              <Text style={styles.small}>My Profile</Text>
            </View>
          </TouchableHighlight>

          {/*//////////////--->>>> BUTTON MY PRODUCTS <<<<---///////////*/}
          <TouchableHighlight onPress={() => navigation.navigate("MyProducts", {user, chng:setChangeTran, total: fullBalance?.total})}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Productos} />
              <Text style={styles.small}>My Products</Text>
            </View>
          </TouchableHighlight>
        </View>

        <Separator />

        {/*//////////////--->>>> BUTTON RECHARGE <<<<---///////////*/}
        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("Recharge", {chng:setChangeTran})}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Saldo} />
              <Text style={styles.small}>Recharge</Text>
            </View>
          </TouchableHighlight>

          {/*//////////////--->>>> BUTTON SEND MONEY <<<<---///////////*/}
          <TouchableHighlight onPress={() => navigation.navigate("Send Money to Contacts", {chng:setChangeTran, total: fullBalance?.total})}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={EnviarDinero} />
              <Text style={styles.small}>Send Money</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};
