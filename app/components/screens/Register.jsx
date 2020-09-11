import React, {useState} from 'react'
import {View, Text, TextInput, Button, Picker} from 'react-native'
import {useDispatch} from 'react-redux'

import style from './styles/RegisterStyle'
import { register_user__post } from '../../redux/actions'
import validate from './supports/Validation_Register'

//----------Leyenda--------
//hOnCh === handlerOnChange
//secureTextEntry={true} === no mostrar el texto
//keyboardType === darle el un type a los inputs

//dispatch(actions)
//const users = useSelector(state => state.users)

export default ()=>{ 
    const dispatch = useDispatch()
    const [error, setError] = useState({
        firstName: '*',
        lastName:'*',
        email:'*',
        password:'*'
    })
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        documentType: '',
        documentNumber: 0,
        birth: '',
        phoneNumber: 0,
        password:'',
        address:''
    })

    const WithoutError = ()=>{
        if(error.firstName || error.lastName || error.phoneNumber || error.email  || error.password) return true
        else return false
    }

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

    const hOnCh_Birth = (e) =>{
        var date = e.target.value.split('-')
        setNewUser({
            ...newUser,
            birth: new Date(parseInt(date[0]), parseInt(date[1]), parseInt(date[2]))
        })
    }

    const register = async ()=>{
        try{
            
            dispatch(register_user__post(newUser))
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <View style={style.container}>
{/*///////////////////////////////////>>> NAME <<<///////////////////////////////////*/}
            {/*//////////////->FIRST NAME<-//////////////*/}
            <Text style={error.firstName ? style.error : style.label}>Nombre</Text>
            <TextInput style={style.inputR} editable name='firstName' onChange={hOnCh_NewUser}/>
            {/*//////////////->LAST NAME<-//////////////*/}
            <Text style={error.lastName ? style.error : style.label}>Apellido</Text>
            <TextInput style={style.inputR} editable name='lastName' onChange={hOnCh_NewUser}/>         
            

{/*///////////////////////////////////>>> DOCUMENT <<<///////////////////////////////////*/}
            <View style={style.docContainer}>
                {/*//////////////->DOCUMENT TYPE<-//////////////*/}
                <View style={style.doc}>
                    <Text style={style.label}>Tipo de doc</Text>
                    <Picker style={style.inputDoc}
                    selectedValue='Select...' 
                    name='documentType' onChange={hOnCh_NewUser}>
                        <Picker.Item label='DNI' value='DNI'/>
                        <Picker.Item label='Pas' value='Pasaporte'/>
                    </Picker>
                </View>
                {/*//////////////->DOCUMENT NUMBER<-//////////////*/}
                <View style={style.doc}>
                    <Text style={style.label}>Numero</Text>
                    <TextInput style={style.inputR} keyboardType='numeric' editable name='documentNumber' onChange={hOnCh_NewUser}/>
                </View>
            </View>

{/*///////////////////////////////////>>> BIRTH <<<///////////////////////////////////*/}
            <Text style={style.label}>Fecha de nacimiento</Text>
            <TextInput style={style.inputR} editable name='birth' onChange={hOnCh_Birth}/>

{/*///////////////////////////////////>>> PHONE NUMBER <<<///////////////////////////////////*/}
            <Text style={style.label}>Tel/Cel</Text>
            <TextInput style={style.inputR} keyboardType='numeric' editable name='phoneNumber' onChange={hOnCh_NewUser}/>

{/*///////////////////////////////////>>> ADRESS <<<///////////////////////////////////*/}
            <Text style={style.label}>Direccion</Text>
            <TextInput style={style.inputR} editable name='address' onChange={hOnCh_NewUser}/>

{/*///////////////////////////////////>>> EMAIL <<<///////////////////////////////////*/}
            {/*//////////////->EMAIL<-//////////////*/}
            <Text style={error.email ? style.error : style.label}>Email</Text>
            <TextInput style={style.inputR} editable name='email' onChange={hOnCh_NewUser}/>
            {/*//////////////->CONFIRM EMAIL<-//////////////*/}
            <Text style={error.confirmEmail ? style.error : style.label}>Confirm Email</Text>
            <TextInput style={style.inputR} editable name='confirmEmail' onChange={hOnCh_NewUser}/>

{/*///////////////////////////////////>>> PASSWORD <<<///////////////////////////////////*/}
            {/*//////////////->PASSWORD<-//////////////*/}
            <Text style={error.password ? style.error : style.label}>Contraseña</Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable name='password' onChange={hOnCh_NewUser}/>
            {/* /////////////->CONFIRM PASSWORD<-/////////// */}
            <Text style={error.confirmPassword ? style.error : style.label}>Confirmar Contraseña</Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable name='confirmPassword' onChange={hOnCh_NewUser}/>

{/*//////////////////////////////////////////////////////////////////////////////////////*/}

            <Button  style={style.btn} title='Enviar' onPress={register} disabled={WithoutError()}/>
        </View>
    )
}

