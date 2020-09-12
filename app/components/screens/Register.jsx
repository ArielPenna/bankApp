///////////////////>> MODULS <<///////////////////
import React, {useState} from 'react'
import {View, Text, TextInput, Button, Picker, ImageBackground} from 'react-native'
import {useDispatch} from 'react-redux'

///////////////////>> SCRIPTS <<///////////////////
import style from './styles/RegisterStyle'
import { register_user__post } from '../../redux/actions'
import validate from './supports/Register/Validation_Register'
import * as D from './supports/Register/Date_Register' //Functions to Date Register

///////////////////>> IMAGES <<///////////////////
import Background from '../../assets/background.png'

//////////////////////////////////////////////////

//----------Leyenda--------
// >> << === TITULO
// --> <-- === SUBTITULO
//hOnCh === handlerOnChange
//secureTextEntry={true} === no mostrar el texto
//keyboardType === darle el un type a los inputs

//dispatch(actions)
//const users = useSelector(state => state.users)

export default ()=>{ 
    const dispatch = useDispatch()

//////////>> STATES <<//////////
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        documentType: 'DNI',
        documentNumber: 0,
        birth: new Date((new Date().getFullYear() - 16), 0, 1),
        phoneNumber: 0,
        password:'',
        address:''
    })
//THIS STATE IS TO HELP US VALIDATE THE INPUTS OF THE USERS
    const [error, setError] = useState({
        firstName: '*',
        lastName:'*',
        documentNumber:'*',
        phoneNumber:'*',
        email:'*',
        confirmEmail:'*',
        password:'*',
        confirmPassword:'*'
    })

//THIS STATE IS TO HELP US IN THE DATES
    const [date, setDate] = useState({
        day: 1,
        month: 0,
        year: new Date().getFullYear() - 16
    })

////////////////////>> SUPPORTS <<////////////////////

    //////////--> FUNCTIONS <--//////////
    ////--> VERIFY IF HAS A ERROR <--////
    const withoutError = ()=>{
        if(error.firstName || error.lastName || error.phoneNumber 
        || error.documentNumber || error.email  || error.password) return true
        else return false
    }    

//////////////////////////////////////////////////

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

    const hOnCh_Birth = (e) =>{
        const id = e.split('-')
        var type
        switch(parseInt(id[0])){
            case 1:
                type = 'day';
                break;
            case 2:
                type = 'month';
                break;
            case 3:
                type = 'year';
                break;
        }

        setDate({
            ...date,
            [type]: parseInt(id[1])
        })
            
        setNewUser({
            ...newUser,
            birth: new Date(date.year, date.month, date.day)
        })
    }

//DISPATCH TO REGISTER THE NEW USER
    const register = ()=>{
        try{            
            dispatch(register_user__post(newUser))
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground source={require('../../assets/background.png')} style={style.container}>
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
                    name='documentType' onValueChange={hOnCh_NewUser}>
                        <Picker.Item label='DNI' value='DNI'/>
                        <Picker.Item label='Pas' value='Pasaporte'/>
                    </Picker>
                </View>
                {/*//////////////->DOCUMENT NUMBER<-//////////////*/}
                <View style={style.doc}>
                    <Text style={error.documentNumber ? style.error : style.label}>Numero</Text>
                    <TextInput style={style.inputR} keyboardType='numeric' editable name='documentNumber' onChange={hOnCh_NewUser}/>
                </View>
            </View>

{/*///////////////////////////////////>>> BIRTH <<<///////////////////////////////////*/}
            <Text style={style.label}>Fecha de nacimiento</Text>
            <View>
                {/*//////--> DAY <--//////*/}
                <Picker name='day' onValueChange={hOnCh_Birth}>
                    {D.daysTotal(date.month).map(day =>{
                        return <Picker.Item label={day.toString()} value={'1-' + day}/>
                    })}
                </Picker>
                {/*//////--> MONTH <--//////*/}
                <Picker name='month' onValueChange={hOnCh_Birth}>
                    {D.months.map(month => {
                        return(
                            //month[0] name's month
                            //month[1] position's month 
                            <Picker.Item label={month[0]} value={'2-' + month[1]}/>
                        )
                    })}
                </Picker>
                {/*//////--> YEAR <--//////*/}
                <Picker name='year' onValueChange={hOnCh_Birth}>
                    {D.yearTotal().map(year => {
                        return <Picker.Item label={year.toString()} value={'3-' + year}/>
                    })}
                </Picker>
            </View>

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
        </ImageBackground>
    )
}

