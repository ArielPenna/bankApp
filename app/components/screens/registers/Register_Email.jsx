//////////////// MODELS ////////////////
import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TextInput, Button, ImageBackground, TouchableHighlight } from 'react-native';

//////////////// SCRIPTS ////////////////
import {send_mail__post} from '../../../redux/actions'
import style from './code_validation/styles/CodeValidationStyle'

//////////////// IMGS ////////////////
import Background from '../../../assets/background.png'


export default () => {
    const dispatch = useDispatch()
///////>> STATES <<///////
    const [mail, setMail] = useState({
    email:''
    })

    const [error, setError] = useState({
        email: '*'
    })

//////>> SUPPORTS <<//////
    ////-> VARS <-////
    const regex_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    ////-> FUNCTIONS <-/////
    const validation = (input) =>{
        let error = {}

        if(!input.email){
            error.email = '*';
        }
        else if(!regex_email.test(input.email)){
            error.email = 'Email invalido *';
        }

        return error
    }  

    const withError = ()=>{
        if(error.email) return true
        else return false
    }

//////>> HANDLER ON CHANGE (hOnCh) <<///////
    const hOnCh_Mail = (e) => {
        setError(validation(
            {email: e.target.value}
        ))

        setMail({ 
            email: e.target.value
        })
    }

///////>> DISPATCH <<//////
    const sendEmail = () => {
        try {
            dispatch(send_mail__post(mail))
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <ImageBackground source={Background} style={style.container}>
            <View>
                <Text style={style.mainTitle}>Register your email</Text>
                <TextInput onChange={hOnCh_Mail} editable name='documentNumber' style={style.input}/>
                <TouchableHighlight onPress={sendEmail} disabled={withError()}
                style={withError() ? style.appButtonContainerFalse : style.appButtonContainer}>
                    <Text style={withError() ? style.appButtonTextFalse : style.appButtonText}>Send</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
}
