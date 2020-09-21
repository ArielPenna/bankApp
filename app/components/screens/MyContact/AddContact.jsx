//////////>> MODULES <</////////
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View ,Text, TextInput, TouchableHighlight, ImageBackground } from 'react-native'
import {add_friend} from '../../../redux/actions.js'

/////////>> SCRIPTS <<//////////
import {contacts} from './prueba/prueba'
import styles from './styles/AddContact_Styles'

////////>> IMGS <<////////////
import Background from '../../../assets/background.png'

export default ({route, navigation}) =>{

    const dispatch = useDispatch()
    const {update} = route.params

    /////////>> STATES <<//////////
    const [contact, setContact] = useState({
        nickName: '',
        email: ''
    })
     
    const [error, setError] = useState({
        nickName: '*',
        email: '*'
    })

    ///////>> SUPPORTS <</////////
    //-----> VARS <-------//
    const regex_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    //-----> FUNCTIONS <--------//
    const validation = input =>{
        let errors = {}

        if(!input.nickName) errors.nickName = '*'

        if(!input.email) errors.email = '*'
        else if(!regex_email.test(input.email)) errors.email='*'

        return errors
    }   

    const withoutErrors = ()=>{
        if(error.nickName || error.email) return true
        else return false
    }

    ////////>> HANDLER ON CHANGES (hOnCh) <</////////
    const hOnCh_Contact = e =>{

        setError(validation({
            ...contact,
            [e.target.name]: e.target.value
        }))

        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    //////////>> DISPATCH <<////////////
    const addFriend = () =>{
        try {
            dispatch(add_friend(contact))
            update('POST')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <ImageBackground source={Background} style={styles.background}>
            <View style={styles.container}>
                {/*/////////>> TITLE <</////////*/}
                <Text style={styles.title}>Add Contact</Text>

                {/*/////////>> NAME <</////////*/}
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.inputs} name='nickName' onChange={hOnCh_Contact}/>

                {/*/////////>> EMAIL <</////////*/}
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.inputs} name='email' onChange={hOnCh_Contact}/>

                {/*/////////>> ADD BUTTON <</////////*/}
                <TouchableHighlight disabled={withoutErrors()} style={styles.btn} 
                onPress={addFriend}>
                    <Text style={styles.appButtonText}>+Add</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}