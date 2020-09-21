//////////////// MODELS ////////////////
import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import { Button, Icon} from 'react-native-elements'

//////////////// SCRIPTS ////////////////
import {send_mail__post} from '../../../redux/actions'
import style from './code_validation/styles/CodeValidationStyle'

//////////////// IMGS ////////////////
import Background from '../../../assets/background.png'


export default ({navigation}) => {
    const dispatch = useDispatch()
    const send = useSelector(state => state.sendEmail)
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
            {typeof send === 'string' && navigation.navigate('Code', mail)}
            <View>
                {/*///////////////////>> TITLE <<///////////////*/}
                <Text style={style.mainTitle}>Register your email</Text>

                {/*///////////////////>> INPUT <<///////////////*/}
                <TextInput onChange={hOnCh_Mail} editable name='documentNumber' style={style.input}/>
                
                {/*///////////////////>> SEND MAIL <<///////////////*/}
                <TouchableHighlight onPress={sendEmail} disabled={withError()}
                style={withError() ? style.appButtonContainerFalse : style.appButtonContainer}>
                    <Text style={withError() ? style.appButtonTextFalse : style.appButtonText}>Send</Text>
                </TouchableHighlight>

                {/*<Button title='send' onPress={sendEmail} loading={false}/>*/}

                {/*///////////////////>> IF THE USER IS REGISTER <<///////////////*/}
                {!send && 
                <View>
                    <Text style={style.subTitleX}>The mail is already in use</Text>
                    <TouchableHighlight onPress={()=>{navigation.navigate('Login')}}
                    style={style.appButtonContainer}>
                    <Text style={style.appButtonText}>LogIn</Text>
                    </TouchableHighlight>
                </View>}

                {/*//////////////////////////////////////////////////////////////*/}
            </View>
        </ImageBackground>
    );
}
