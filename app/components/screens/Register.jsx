///////////////////>> MODULS <<///////////////////
import React, {useState} from 'react'
import {View, Text, TextInput, Button, Picker, ImageBackground} from 'react-native'
import {useDispatch} from 'react-redux'

///////////////////>> SCRIPTS <<///////////////////
import style from './styles/RegisterStyle'
import { register_user__post } from '../../redux/actions'
import validate from './supports/Register/Validation_Register'
import * as D from './supports/Register/Date_Register' //Functions to Date Register
import api_adress from './supports/Register/Api_Adress_Register'

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
        adress:'*',
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

//THIS STATE IS TO HELP US IN THE ADRESS
    const [adress, setAdress] = useState({
        street_1: '',
        street_2: ''
    })

////////////////////>> SUPPORTS <<////////////////////

    //////////--> FUNCTIONS <--//////////
    ////--> VERIFY IF HAS A ERROR <--////
    const withoutError = ()=>{
        if(error.firstName || error.lastName || error.phoneNumber 
        || error.documentNumber || error.email  || error.password) return true
        else return false
    } 
    
    const searchDirection = ()=>{
        const street = adress.street_1 + ' y ' + adress.street_2
        api_adress(street, newUser, setNewUser)
    }

///////////////////>> HANDLER ON CHAGES <<///////////////////

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

    const hOnCh_Adress = (e)=>{
        setAdress({
            ...adress,
            [e.target.name]: e.target.value
        })
    }

//////////>> DISPATCH TO REGISTER THE NEW USER <<//////////
    const register = ()=>{
        try{            
            dispatch(register_user__post(newUser))
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground source={Background} style={style.container}>
        <View style={style.container}>
{/*///////////////////////////////////>>> NAME <<<///////////////////////////////////*/}
            {/*//////////////->FIRST NAME<-//////////////*/}
            <Text style={error.firstName ? style.error : style.label}>Name</Text>
            <TextInput style={style.inputR} editable name='firstName' onChange={hOnCh_NewUser}/>
            {/*//////////////->LAST NAME<-//////////////*/}
            <Text style={error.lastName ? style.error : style.label}>Surname</Text>
            <TextInput style={style.inputR} editable name='lastName' onChange={hOnCh_NewUser}/>         
            

{/*///////////////////////////////////>>> DOCUMENT <<<///////////////////////////////////*/}
            <View style={style.docContainer}>
                {/*//////////////->DOCUMENT TYPE<-//////////////*/}
                <View style={style.doc}>
                    <Text style={style.label}>Type doc</Text>
                    <Picker style={style.inputDoc}
                    name='documentType' onValueChange={hOnCh_NewUser}>
                        <Picker.Item key={1} label='DNI' value='DNI'/>
                        <Picker.Item key={2} label='Pas' value='Pasaporte'/>
                    </Picker>
                </View>
                {/*//////////////->DOCUMENT NUMBER<-//////////////*/}
                <View style={style.docN}>
                    <Text style={error.documentNumber ? style.error : style.label}>Numero</Text>
                    <TextInput style={style.inputDocNum} keyboardType='numeric' editable name='documentNumber' onChange={hOnCh_NewUser}/>
                </View>
            </View>

{/*///////////////////////////////////>>> BIRTH <<<///////////////////////////////////*/}
            <Text style={style.label}>Fecha de nacimiento</Text>
            <View style={style.birth}>
                {/*//////--> DAY <--//////*/}
                <Picker style={style.date} onValueChange={hOnCh_Birth}>
                    {D.daysTotal(date.month).map(day =>{
                        return <Picker.Item key={day} label={day.toString()} value={'1-' + day}/>
                    })}
                </Picker>
                {/*//////--> MONTH <--//////*/}
                <Picker style={style.date} onValueChange={hOnCh_Birth}>
                    {D.months.map(month => {
                        return(
                            //month[0] name's month
                            //month[1] position's month 
                            <Picker.Item key={month[1]} label={month[0]} value={'2-' + month[1]}/>
                        )
                    })}
                </Picker>
                {/*//////--> YEAR <--//////*/}
                <Picker style={style.date} onValueChange={hOnCh_Birth}>
                    {D.yearTotal().map(year => {
                        return <Picker.Item key={year} label={year.toString()} value={'3-' + year}/>
                    })}
                </Picker>
            </View>

{/*///////////////////////////////////>>> ADRESS <<<///////////////////////////////////*/}
            <Text style={error.adress ? style.error : style.label}>Adress</Text>
            <View>
                <Text style={style.label}>Street 1</Text>
                <TextInput style={style.inputR} editable name='street_1' onChange={hOnCh_Adress}/>
            </View>
            <View>
                <Text style={style.label}>Street 2</Text>
                <TextInput style={style.inputR} editable name='street_2' onChange={hOnCh_Adress}/>
            </View>
            <Button title='Search' onPress={searchDirection}/>

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
            <Text style={error.password ? style.error : style.label}>Contraseña</Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable name='password' onChange={hOnCh_NewUser}/>
            {/* /////////////->CONFIRM PASSWORD<-/////////// */}
            <Text style={error.confirmPassword ? style.error : style.label}>Confirmar Contraseña</Text>
            <TextInput style={style.inputR} secureTextEntry={true} editable name='confirmPassword' onChange={hOnCh_NewUser}/>

{/*//////////////////////////////////////////////////////////////////////////////////////*/}

            <Button  style={style.btn} title='Enviar' onPress={register} disabled={withoutError()}/>
        </View>
        </ImageBackground>
    )
}

