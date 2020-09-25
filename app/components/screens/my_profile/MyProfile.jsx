//////////////>> MODULES <<//////////////
import React from 'react';
import {useSelector} from 'react-redux'; 
import { View, Text, ImageBackground, TouchableHighlight} from 'react-native';

//////////////>> SCRIPTS <<//////////////
import styles from './styles/MyProfileStyle';

//////////////>> IMGS <</////////////
import Background from '../../../assets/background.png';

const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route}) => {

   ////////////// REDUX /////////////
  const myProfile= useSelector(state => state.user)  

  return (    
    <ImageBackground source={Background} style={styles.container}>
      <View >  
        {/*///////////////>> INFO <<////////////////*/}
        <Text style={styles.mainTitle}>Personal Data</Text>

        <Separator/>

          {/*//////>>>>>>> NAME <<<<<<<<<///////*/}
          <Text style={styles.label}>Name:</Text>        
          <Text style={styles.inputR}>  {myProfile.firstName + ' ' + myProfile.lastName}</Text>        
                
        <Separator/>

          {/*//////>>>>>>> DOCUMENT <<<<<<<<<///////*/}
          <Text style={styles.label}>{myProfile.documentType}</Text>        
          <Text style={styles.inputR}>{myProfile.documentNumber}</Text>    
        
        <Separator/>

          {/*//////>>>>>>> EMAIL <<<<<<<<<///////*/}
          <Text style={styles.label}>E-Mail:</Text>        
          <Text style={styles.inputR}>  {myProfile.email}</Text> 

        <Separator/>

          {/*//////>>>>>>> PHONE <<<<<<<<<///////*/}
          <Text style={styles.label}>Phone:</Text>      
          <Text style={styles.inputR}>  {myProfile.phoneNumber}</Text> 

        <Separator/>

          {/*//////>>>>>>> ADDRESS <<<<<<<<<///////*/}
          <Text style={styles.label}>Address:</Text>        
          <Text style={styles.inputA}>  {myProfile.address}</Text> 

        <Separator/>

        {/*//////>>>>>>> BUTTON NAVIGATION <<<<<<<<<///////*/}
        <TouchableHighlight onPress={() => navigation.navigate("EditProfile", route.params )}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>EDIT PROFILE</Text>
          </View>
        </TouchableHighlight>

      </View>
    </ImageBackground>
  )
}