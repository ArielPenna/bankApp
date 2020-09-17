import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Button, View, Text, TextInput, TouchableHighlight, Image, ImageBackground} from 'react-native';
import {contacts} from './prueba.js'

import style from './MyContactStyles'
import {Card, Icon} from 'react-native-elements'

// import styles from './styles/HomeStyle'

import Background from '../../../assets/background.png'



export default ({ navigation }) => {
  const dispatch = useDispatch()
  const contact = useSelector(state => state.contacts)

  return (
    <ImageBackground source={Background} style={style.container} >
      <View>
        <Text style={style.title}>My Contacts</Text>

          <View style={style.passwordContainer}>
              <View style={style.btnSearch}>
                <Icon  
                    raised
                    name='search'
                    type='font-awesome'
                    color='black'
                    onPress={() => console.log('hello')} />
              </View>
            <TextInput style={style.inputStyle} placeholder="Search friend..."/>  
          </View>

        <TouchableHighlight style={style.btn}>
            <Text style={style.appButtonText}> +Add Contact </Text>
        </TouchableHighlight>

        {contacts.length && contacts.map(c => {
          return (
          <Card style={style.cardContainer}>
            <Card.Title style={style.cardTitle}> {c.name} </Card.Title>
              <Card.Divider/>
                <View >
                  <Text style={style.cardText}>{c.email} </Text>
                </View>
          </Card>)
          })
        }


      </View>      
    </ImageBackground>
  )
}

