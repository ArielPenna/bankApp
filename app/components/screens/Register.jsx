import React, {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import style from './styles/RegisterStyle'
//----------Leyenda--------
//hOnCh == handlerOnChange

export default ()=>{
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
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return(
        <View style={style.container}>
            {/*//////////////->FIRST NAME<-//////////////*/}
            <Text style={style.label}>Nombre</Text>
            <TextInput style={style.inputR} editable name='firstName' onChange={hOnCh_NewUser}/>
            {/*//////////////->LAST NAME<-//////////////*/}
            <Text style={style.label}>Apellido</Text>
            <TextInput style={style.inputR} editable name='lastName' onChange={hOnCh_NewUser}/>
            {/*//////////////->EMAIL<-//////////////*/}
            <Text style={style.label}>Email</Text>
            <TextInput style={style.inputR} editable name='email' onChange={hOnCh_NewUser}/>
            {/*//////////////->DOCUMENT TYPE<-//////////////*/}
            <Text style={style.label}>Tipo de documento</Text>
            <TextInput style={style.inputR} editable name='documentType' onChange={hOnCh_NewUser}/>
            {/*//////////////->DOCUMENT NUMBER<-//////////////*/}
            <Text style={style.label}>Numero</Text>
            <TextInput style={style.inputR} editable name='documentNumber' onChange={hOnCh_NewUser}/>
            {/*//////////////->BIRTH<-//////////////*/}
            <Text style={style.label}>Fecha de nacimiento</Text>
            <TextInput style={style.inputR} editable name='birth' onChange={hOnCh_NewUser}/>
            {/*//////////////->PHONE NUMBER<-//////////////*/}
            <Text style={style.label}>Tel/Cel</Text>
            <TextInput style={style.inputR} editable name='phoneNumber' onChange={hOnCh_NewUser}/>
            {/*//////////////->ADRESS<-//////////////*/}
            <Text style={style.label}>Direccion</Text>
            <TextInput style={style.inputR} editable name='address' onChange={hOnCh_NewUser}/>
            {/*//////////////->PASSWORD<-//////////////*/}
            <Text style={style.label}>Contraseña</Text>
            <TextInput style={style.inputR} editable name='password' onChange={hOnCh_NewUser}/>
            {/* /////////////->CONFIRM PASSWORD<-/////////// */}
            <Text style={style.label}>Confirmar Contraseña</Text>
            <TextInput style={style.inputR} editable name='password' onChange={hOnCh_NewUser}/>

            <Button  style={style.btn} title='Enviar' onPress={()=> console.log('subido')}/>
        </View>
    )
}

