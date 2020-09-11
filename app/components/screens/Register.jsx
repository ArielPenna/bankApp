import React, {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import { register_user__post } from '../../redux/actions'

//----------Leyenda--------
//hOnCh == handlerOnChange


//dispatch(actions)
//const users = useSelector(state => state.users)

export default ()=>{ 
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)   
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        documentType: '',
        documentNumber: 0,
        birth: 0,
        phoneNumber: 0,
        password:'',
        address:''
    })

    const hOnCh_NewUser = (e) =>{
        if(e.target.name === 'birth'){
            var fecha = e.target.value.split('-')
            setNewUser({
                ...newUser,
                birth: new Date(parseInt(fecha[0]), parseInt(fecha[1]), parseInt(fecha[2]))
            })
            return
        }
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const register = async ()=>{
        try{
            console.log(newUser)
            dispatch(register_user__post(newUser))
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <View>
            {console.log(users)}
            {/*//////////////->FIRST NAME<-//////////////*/}
            <Text>Nombre</Text>
            <TextInput editable name='firstName' onChange={hOnCh_NewUser}/>
            {/*//////////////->LAST NAME<-//////////////*/}
            <Text>Apellido</Text>
            <TextInput editable name='lastName' onChange={hOnCh_NewUser}/>
            {/*//////////////->EMAIL<-//////////////*/}
            <Text>Email</Text>
            <TextInput editable name='email' onChange={hOnCh_NewUser}/>
            {/*//////////////->DOCUMENT TYPE<-//////////////*/}
            <Text>Tipo de documento</Text>
            <TextInput editable name='documentType' onChange={hOnCh_NewUser}/>
            {/*//////////////->DOCUMENT NUMBER<-//////////////*/}
            <Text>Numero</Text>
            <TextInput editable name='documentNumber' onChange={hOnCh_NewUser}/>
            {/*//////////////->BIRTH<-//////////////*/}
            <Text>Fecha de nacimiento</Text>
            <TextInput editable name='birth' onChange={hOnCh_NewUser}/>
            {/*//////////////->PHONE NUMBER<-//////////////*/}
            <Text>Tel/Cel</Text>
            <TextInput editable name='phoneNumber' onChange={hOnCh_NewUser}/>
            {/*//////////////->ADRESS<-//////////////*/}
            <Text>Direccion</Text>
            <TextInput editable name='address' onChange={hOnCh_NewUser}/>
            {/*//////////////->PASSWORD<-//////////////*/}
            <Text>Contraseña</Text>
            <TextInput editable name='password' onChange={hOnCh_NewUser}/>

            <Button title='Enviar' onPress={register}/>
        </View>
    )
}