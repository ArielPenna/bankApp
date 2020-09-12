///////////////////>> MODULS <<///////////////////
import React from 'react';
import { Button, View, SafeAreaView, Text, Alert, Image, ImageBackground, TouchableHighlight} from 'react-native';
import { useSelector } from 'react-redux'
import styles from './styles/MainStyle'
import Background from "../../assets/background.png"

const Separator = () => (
  <View style={styles.separator} />
);

export default ({ navigation }) => {
  const user = useSelector(state => state.user)

  return (
    <ImageBackground source={Background} style={styles.container}>
      {console.log(user)}
      <View>
        <View style={styles.top}>
          
          <View style={styles.row}>
            <View>
            <Text style={styles.mainTitle} >Hola, Usuario</Text>
            <Image style={styles.img} source={require('../../assets/avatar.jpg')}/>
            </View>
            <Text style={styles.money} >$584652</Text>        
          </View>
        </View>

        <Separator/>

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
          <Text style={styles.centerText}>1 Día    7 Días    30 Días</Text>  
        </View>  

        <Separator/>

        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require('../../assets/transacciones.png')}/>
              <Text style={styles.small}>Transacciones</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require('../../assets/estadisticas.png')}/>
              <Text style={styles.small}>Estadisticas</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require('../../assets/datos.png')}/>
              <Text style={styles.small}>Mis Datos</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require('../../assets/productos.png')}/>
              <Text style={styles.small}>Mis Productos</Text>
            </View>
          </TouchableHighlight>          
        </View>  

        <Separator/>    

        <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require('../../assets/saldo.png')}/>
              <Text style={styles.small}>Cargar Saldo</Text>
            </View>
          </TouchableHighlight>          

          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={require('../../assets/enviarDinero.png')}/>
              <Text style={styles.small}>Enviar Dinero</Text>
            </View>
          </TouchableHighlight>       
        </View>      
      </View>      
    </ImageBackground>
  )
}


