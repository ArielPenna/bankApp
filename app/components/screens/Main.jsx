///////////////////>> MODULS <<///////////////////
import React from 'react';
import { Button, View, Text, Image, ImageBackground} from 'react-native';
import { useSelector } from 'react-redux'

///////////////////>> SCRIPTS <<///////////////////
import styles from './styles/MainStyle'

///////////////////>> IMAGES <<///////////////////
import Background from '../../assets/background.png'
import Avatar from '../../assets/avatar.jpg'

//////////////////////////////////////////////////

export default ({ navigation }) => {
  const user = useSelector(state => state.user)

  return (
    <ImageBackground source={Background} style={styles.container}>
      {console.log(user)}
      <View>
        <View>
          <Text style={styles.mainTitle} >Nombre Usuario</Text>
          <View style={styles.row}>
            <Image style={styles.img} source={Avatar}/>
            <Text style={styles.money} >$584652</Text>          
          </View>
        </View>
        <View style={styles.generalView}>
          <Text>General</Text>
          <View style={styles.row}>
            <View>
              <Text>Ingresos</Text>
              <Text>$5400</Text>
            </View>
            <View>
              <Text>Gastos</Text>
              <Text>$5400</Text>
            </View>
          </View>
          <Text>Selector de periodo</Text>  
        </View>  
        <View style={styles.row}>
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />  
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />
        </View>      
        <View style={styles.row}>
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />
          <Button title="LOGIN" color="lightgrey" onPress={() => navigation.navigate('Login')} />        
        </View>      
      </View>      
    </ImageBackground>
  )
}


