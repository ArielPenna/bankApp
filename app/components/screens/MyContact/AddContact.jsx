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
    const {setChange} = route.params

    /////////>> STATES <<//////////
    const [contact, setContact] = useState({
        nickName: '',
        email: ''
    })
    
    const [friend, setFriend] = useState(false)

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
        if(error.email) return true
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
            add_friend(contact, setFriend)
            setChange('POsTTTTT')
        } catch (err) {
            console.log(err)
        }
    }

    const Separator = () => <View style={styles.separator} />;

    return(
        <ImageBackground source={Background} style={styles.background}>
            {friend && navigation.navigate('MyContact')}
            <View >
                {/*/////////>> TITLE <</////////*/}
                <Text style={styles.title}>Add Contact</Text>

                <Separator/>

                {/*/////////>> EMAIL <</////////*/}
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.inputs} name='e-mail' placeholder="Enter e-mail..." onChange={hOnCh_Contact}/>

                {/*/////////>> NAME <</////////*/}
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.inputs} name='nickName' onChange={hOnCh_Contact} />
                
                <Separator/>

                {/*/////////>> ADD BUTTON <</////////*/}
                <TouchableHighlight disabled={withoutErrors()} style={styles.btn} 
                onPress={addFriend}>
                    <Text style={styles.appButtonText}>+ADD</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}