//////////////// MODULS ////////////////
import React,{ useState }from 'react'
import {useDispatch} from 'react-redux'
import {View, Text, TextInput , TouchableHighlight, Picker, ImageBackground} from 'react-native'

//////////////// SCRIPTS ////////////////
import style from './styles/RegisterStyle'
import validate from './supports/Validation_Register'
import {send_mail__post} from '../../../redux/actions'

//////////////// IMGS ////////////////
import Background from '../../../assets/background.png'

export default ({route, navigation}) => {
    //DISPATCH 
    const dispatch = useDispatch()

/////////////>> STATES <<//////////////
    const [newUser, setNewUser] = useState(route.params.info)
    
    //THIS STATE IS TO HELP US VALIDATE THE INPUTS OF THE USERS
    const [error, setError] = useState({
        firstName: '*',
        lastName:'*',
        documentNumber:'*',
        adress:'*',
        phoneNumber:'*',
        email:'*',
        confirmEmail:'*',
        password:'*',
        confirmPassword:'*'
    })    

////////////////////>> SUPPORTS <<////////////////////

    //////////--> FUNCTIONS <--//////////
    ////--> VERIFY IF HAS A ERROR <--////
    const withoutError = ()=>{
        if(error.phoneNumber || error.email  || error.password
            || error.confirmEmail  || error.confirmPassword) return true
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
        console.log(newUser)       
    }   

//DISPATCH THE REGISTER AND SEND THE CODE
    const register = ()=>{
        try{    
            var sendMail = {
                userObj: newUser,
                name: newUser.firstName + " " + newUser.lastName
            }        
            dispatch(send_mail__post(sendMail))
            navigation.navigate('Code')
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground source={Background} style={style.background}>
            <Text style={style.mainTitle}>Almost</Text>
        <View>           

{/*///////////////////////////////////>>> PHONE NUMBER <<<///////////////////////////////////*/}
            <Text style={error.phoneNumber ? style.error : style.label}>Tel/Cel</Text>
            <TextInput style={style.inputR} keyboardType='numeric' editable name='phoneNumber' onChange={hOnCh_NewUser}/>

{/*///////////////////////////////////>>> EMAIL <<<///////////////////////////////////*/}
            {/*//////////////->EMAIL<-//////////////*/}
            <Text style={error.email ? style.error : style.label}>Email</Text>
            <TextInput style={style.inputR} editable name='email' onChange={hOnCh_NewUser}/>
            {/*//////////////->CONFIRM EMAIL<-//////////////*/}
            <Text style={error.confirmEmail ? style.error : style.label}>Confirm Email</Text>
            <TextInput style={style.inputR} editable name='confirmEmail' onChange={hOnCh_NewUser}/>

{/*///////////////////////////////////>>> PASSWORD <<<///////////////////////////////////*/}
            {/*//////////////->PASSWORD<-//////////////*/}
            <Text style={error.password ? style.error : style.label}>Password</Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable name='password' onChange={hOnCh_NewUser}/>
            {/* /////////////->CONFIRM PASSWORD<-/////////// */}
            <Text style={error.confirmPassword ? style.error : style.label}>Confirm Password</Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable name='confirmPassword' onChange={hOnCh_NewUser}/>

{/*//////////////////////////////////////////////////////////////////////////////////////*/}
            
            <TouchableHighlight disabled={withoutError()} onPress={register} 
            style={withoutError() ? style.appButtonContainerFalse : style.appButtonContainer}>
                <Text style={style.appButtonText}>Send</Text>
            </TouchableHighlight>
        </View>
        </ImageBackground>
    )
}