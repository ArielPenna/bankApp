import React from 'react';
import {useSelector} from 'react-redux'; 
import { View, Text, Image, ImageBackground} from 'react-native';

import Background from '../../assets/background.png'
import { Card } from 'react-native-elements';



export default ({ navigation }) => {

  const myProfile= useSelector(state => state.user)   

  return (    
    <ImageBackground source={Background}>
      <View>
        <Text h1>My profile</Text>         
          
        <Text h2>Personal Data</Text>
        <Text>E-Mail:</Text>
        <Card>
          <Text>{myProfile.email}</Text>
        </Card>
        <Text h3>Name:</Text>
        <Card>
          <Text>{myProfile.firstName + ' ' + myProfile.lastName}</Text>
        </Card>
        <Text h3>ID:</Text>
        <Card>
          <Text>{myProfile.documentType + myProfile.documentNumber}</Text>
        </Card>
        <Text h3>Phone number:</Text>
        <Card>
          <Text>{myProfile.phoneNumber}</Text> 
        </Card>
        <Text h3>Address:</Text>
        <Card>
          <Text>{myProfile.address}</Text>         
        </Card>
      </View>
    </ImageBackground>
  )
}