import React from 'react';
import {useSelector} from 'react-redux'; 
import { View, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';

import Background from '../../../assets/background.png';
import { Card } from 'react-native-elements';

import styles from './styles/MyProfile';

const Separator = () => <View style={styles.separator} />;

export default ({ navigation, route}) => {

  const myProfile= useSelector(state => state.user) 
  const {user, editProfile}= route.params  

  return (    
    <ImageBackground source={Background} style={styles.container}>
      <View style={styles.misdatos}>
        <Separator />
        <Text style={styles.mainTitle}>My profile</Text>         
        <Separator />  
        <Text style={styles.textmisdatos}>Personal Data</Text>
        <Separator />
        <Text>E-Mail:</Text>
        <Card>
          <Text>{myProfile.email}</Text>
        </Card>
        <Separator />
        <Text >Name:</Text>
        <Card>
          <Text>{myProfile.firstName + ' ' + myProfile.lastName}</Text>
        </Card>
        <Separator />
        <Text>ID:</Text>
        <Card>
          <Text>{myProfile.documentType + myProfile.documentNumber}</Text>
        </Card>
        <Separator />
        <Text>Phone number:</Text>
        <Card>
          <Text>{myProfile.phoneNumber}</Text> 
        </Card>
        <Separator />
        <Text>Address:</Text>
        <Card>
          <Text>{myProfile.address}</Text>         
        </Card>
        <Separator />
        <TouchableHighlight onPress={() => navigation.navigate("EditProfile", {user: user, editProfile: editProfile} )}>
          <View style={styles.touch}>
            <Text>Edit Profile</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  )
}