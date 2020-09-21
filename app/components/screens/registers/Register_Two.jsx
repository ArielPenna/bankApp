//////////////// MODULS ////////////////
import React,{ useState }from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {View, Text, TextInput , TouchableHighlight, Picker, ImageBackground} from 'react-native'

//////////////// SCRIPTS ////////////////
import style from './styles/RegisterStyle'
import validate from './supports/Validation_Register'
import {register_user__post} from '../../../redux/actions'

//////////////// IMGS ////////////////
import Background from '../../../assets/background.png'

export default ({route, navigation}) => {
    //DISPATCH 
    const dispatch = useDispatch()

    const succesfull = useSelector(state => state.register)

/////////////>> STATES <<//////////////
    const [newUser, setNewUser] = useState(route.params.info)
    
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
        console.log(newUser)       
    }   

//DISPATCH THE REGISTER AND SEND THE CODE
    const register = ()=>{
        try{         
            dispatch(register_user__post(newUser))            
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground source={Background} style={style.background}>
            {succesfull && navigation.navigate('Login')}
            <Text style={style.mainTitle}>Almost</Text>
        <View>           

{/*///////////////////////////////////>>> PHONE NUMBER <<<///////////////////////////////////*/}
            <Text style={error.phoneNumber ? style.error : style.label}>Tel/Cel</Text>
            <TextInput style={style.inputR} keyboardType='numeric' editable name='phoneNumber' onChange={hOnCh_NewUser}/>

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
                <Text style={withoutError() ? style.appButtonTextFalse : style.appButtonText}>Send</Text>
            </TouchableHighlight>
        </View>
        </ImageBackground>
    )
}