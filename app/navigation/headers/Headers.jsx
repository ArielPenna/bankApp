import React from 'react'
import { HeaderBackButton } from '@react-navigation/stack' 

export const BackHome = {
    title: '',
    headerLeft: (props) => (
        <HeaderBackButton
        
        headerTintColor={"#752667"}
        onPress={() => {
            console.log(props)
        }}/>
    ),
    headerTintColor: "#752667",
    headerStyle: {
        backgroundColor: "#f7b700",
        height: 50,
    }
};

const config = {
    animation: 'spring',
    config: {
    stiffness: 10000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 1,
    },
};

export const General = {
    title: '',
    headerTintColor: "#752667",
    headerStyle: {
        backgroundColor: "#f7b700",
        height: 50,
    },
    transitionSpec: {
        duration: 750,
        open: config,
        close: config
    }
}