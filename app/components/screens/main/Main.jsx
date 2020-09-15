import React, {useEffect} from "react";
import { Button, View, SafeAreaView, Text, Alert, Image, ImageBackground, TouchableHighlight } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/MainStyle";
import {get_user__me, transactions_get} from "../../../redux/actions"

///////////////////>> IMGS <<///////////////////
import Background from "../../../assets/background.png";
import Avatar from "../../../assets/avatar.jpg";
import Transacciones from "../../../assets/transacciones.png";
import Estadisticas from "../../../assets/estadisticas.png";
import Productos from "../../../assets/productos.png";
import Saldo from "../../../assets/saldo.png";
import EnviarDinero from "../../../assets/enviarDinero.png";

const Separator = () => <View style={styles.separator} />;

export default ({ navigation }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);   
  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(get_user__me())
    dispatch(transactions_get())
  }, []);
  {console.log(user)}
  {console.log(transactions)}
  

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <View style={styles.top}>
          <View style={styles.row}>
            <View>
              <Text style={styles.mainTitle}>Hola, {typeof user == "object" && user.firstName}</Text>
              <Image style={styles.img} source={Avatar} />
            </View>
            <Text style={styles.money}>$ {typeof user == "object" && user.wallet.balance}</Text>
          </View>
        </View>

        <Separator />

        <View style={styles.generalView}>
          <Text style={styles.centerText}>General</Text>
          <View style={styles.row}>
            <View style={styles.margin}>
              <Text style={styles.centerText}>Ingresos</Text>
              <Text style={styles.bigText}>$5400</Text>
            </View>
            <View style={styles.margin}>
              <Text style={styles.centerText}>Gastos</Text>
              <Text style={styles.bigText}>$5400</Text>
            </View>
          </View>
          <Text style={styles.centerText}>1 Día 7 Días 30 Días</Text>
        </View>

        <Separator />

        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("Transactions")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Transacciones} />
              <Text style={styles.small}>Transacciones</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate("Statistics")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Estadisticas} />
              <Text style={styles.small}>Estadisticas</Text>
            </View>
          </TouchableHighlight>

          {/* <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require('../../assets/datos.png')}/>
              <Text style={styles.small}>Mis Datos</Text>
            </View>
          </TouchableHighlight> */}

          <TouchableHighlight onPress={() => navigation.navigate("Account")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Productos} />
              <Text style={styles.small}>Mis Cuenta</Text>
            </View>
          </TouchableHighlight>
        </View>

        <Separator />

        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("Recharge")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={Saldo} />
              <Text style={styles.small}>Cargar Saldo</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate("SendMoney")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={EnviarDinero} />
              <Text style={styles.small}>Enviar Dinero</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};
