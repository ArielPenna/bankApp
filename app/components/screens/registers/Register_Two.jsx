//////////////// MODULS ////////////////
import React,{ useState }from 'react'
import {View, Text, TextInput , TouchableHighlight, Picker, ImageBackground} from 'react-native'
import { Button } from 'react-native-elements'

//////////////// SCRIPTS ////////////////
import style from './styles/RegisterStyle'
import validate from './supports/Validation_Register'
import {register_user__post} from '../../../redux/actions'

//////////////// IMGS ////////////////
import Background from '../../../assets/background.png'

export default ({route, navigation}) => {

/////////////>> STATES <<//////////////
    const [newUser, setNewUser] = useState(route.params.info)

    const [regis, setRegister] = useState(false)
    const [loading, setLoading] = useState(false)
    
    //THIS STATE IS TO HELP US VALIDATE THE INPUTS OF THE USERS
    const [error, setError] = useState({
        phoneNumber:'*',
        password:'*',
        confirmPassword:'*'
    })    
    

////////////////////>> SUPPORTS <<////////////////////

    //////////--> FUNCTIONS <--//////////
    ////--> VERIFY IF HAS A ERROR <--////
    const withoutError = ()=>{
        if(error.phoneNumber  || error.password || error.confirmPassword) return true
        else return false
    }
    
////////////////////>> HANDLER OF CHANGE <<////////////////////
    const hOnCh_NewUser = (e) =>{
        setError(
            validate({
            ...newUser,
            [e.target.name]: e.target.value,
        }));
        
        if (e.target.name != "confirmEmail" || e.target.name != "confirmPassword"){
            setNewUser({
                ...newUser,
                [e.target.name]: e.target.value
            })
        }  
    }   

//DISPATCH THE REGISTER AND SEND THE CODE
    const register = ()=>{
        try{         
            setLoading(true)
            register_user__post(newUser, setRegister, setLoading)           
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground source={Background} style={style.background}>
            {regis && navigation.navigate('Login')}
            <Text style={style.mainTitle}>Almost</Text>
        <View>           

{/*///////////////////////////////////>>> PHONE NUMBER <<<///////////////////////////////////*/}
            <Text style={error.phoneNumber ? style.error : style.label}>Phone N°</Text>
            <TextInput style={style.inputR} keyboardType='numeric' editable name='phoneNumber' onChange={hOnCh_NewUser}/>

{/*///////////////////////////////////>>> PASSWORD <<<///////////////////////////////////*/}
            {/*//////////////->PASSWORD<-//////////////*/}
            <Text style={error.password ? style.error : style.label}>Password</Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable name='password' onChange={hOnCh_NewUser}/>
            {/* /////////////->CONFIRM PASSWORD<-/////////// */}
            <Text style={error.confirmPassword ? style.error : style.label}>Confirm Password</Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable name='confirmPassword' onChange={hOnCh_NewUser}/>

{/*/////////////////////////////////>> SEND BUTTON <<////////////////////////////////////////////////*/}
            <Button title='SEND' onPress={register} disabled={withoutError()} loading={loading}
            disabledStyle={style.appButtonContainerFalse} 
            disabledTitleStyle={style.appButtonTextFalse}
            titleStyle={style.appButtonText}
            buttonStyle={style.appButtonContainer}/>
            
        </View>
        </ImageBackground>
    )
}