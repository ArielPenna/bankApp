//////////////// MODELS ////////////////
import React ,{useState} from 'react';
import { View, Text, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements'

//////////////// SCRIPTS ////////////////
import {send_mail__post} from '../../../redux/actions'
import style from './code_validation/styles/CodeValidationStyle'

//////////////// IMGS ////////////////
import Background from '../../../assets/background.png'


export default ({navigation}) => {

///////>> STATES <<///////
    const [mail, setMail] = useState({
    email:''
    })

    const [error, setError] = useState({
        email: '*'
    })

    const [send, setSend] = useState(true)
    const [loading, setLoading] = useState(false)

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
    const sendEmail = async () => {
        try {
            setLoading(true)
            send_mail__post(mail, setSend, setLoading)
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
                <Button title='SEND' onPress={sendEmail} disabled={withError()} loading={loading}
                disabledStyle={style.appButtonContainerFalse} 
                disabledTitleStyle={style.appButtonTextFalse}
                titleStyle={style.appButtonText}
                buttonStyle={style.appButtonContainer}/>

                {/*///////////////////>> IF THE USER IS REGISTER <<///////////////*/}
                {!send && 
                <View>
                    <Text style={style.subTitleX}>This mail is already in use</Text>
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
