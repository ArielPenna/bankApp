import React from 'react';
import {useSelector} from 'react-redux'; 
import { View, Text, Image,TextInput, ImageBackground, TouchableHighlight} from 'react-native';
import Background from '../../../assets/background.png';
import styles from './styles/MyProfile';

const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route}) => {

  const myProfile= useSelector(state => state.user) 
  const {user, editProfile}= route.params  

  return (    
    <ImageBackground source={Background} style={styles.container}>
      <View >         
        <Text style={styles.mainTitle}>Personal Data</Text>
        <Separator />
          <Text style={styles.label}>E-Mail:</Text>        
          <Text style={styles.inputR}>  {myProfile.email}</Text>        
        <Separator />
          <Text style={styles.label}>Name:</Text>        
          <Text style={styles.inputR}>  {myProfile.firstName + ' ' + myProfile.lastName}</Text>        
        <Separator />
          <Text style={styles.label}>ID:</Text>        
          <Text style={styles.inputR}>  {myProfile.documentType + myProfile.documentNumber}</Text>        
        <Separator />
          <Text style={styles.label}>Phone number:</Text>      
          <Text style={styles.inputR}>  {myProfile.phoneNumber}</Text>         
        <Separator />
          <Text style={styles.label}>Address:</Text>        
          <Text style={styles.inputR}>  {myProfile.address}</Text>         
        <Separator />
        <TouchableHighlight onPress={() => navigation.navigate("EditProfile", {user: user, editProfile: editProfile} )}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>EDIT PROFILE</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  )
}