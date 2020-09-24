import React from 'react'
import { Button } from 'react-native' 
import { HeaderBackButton } from '@react-navigation/stack'

export const Main = {
    title: '',
    headerLeft: () => (
        <Button title='' color="#f7b700" onPress={()=>{}}/>
    ),
    headerRight: () => (
        <Button title='LOGOUT' color="#752667" onPress={()=>{}}/>
    ),
    headerTintColor: "#752667",
    headerStyle: {
        backgroundColor: "#f7b700",
        height: 50,
    }
};

export const General = {
    title: '',
    headerTintColor: "#752667",
    headerStyle: {
        backgroundColor: "#f7b700",
        height: 50,
    }
}