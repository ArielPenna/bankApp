///////////////////>> MODULS <<///////////////////
import React, {useState} from 'react'
import {View, Text, TextInput, Picker, ImageBackground, TouchableHighlight} from 'react-native'

///////////////////>> SCRIPTS <<///////////////////
import style from './styles/RegisterStyle'
import validate from './supports/Validation_Register'
import * as D from './supports/Date_Register' //Functions to Date Register
import api_adress from './supports/Api_Adress_Register' //Function to Api Adress

///////////////////>> IMAGES <<///////////////////
import Background from '../../../assets/background.png'

//////////////////////////////////////////////////

//----------Leyenda--------
// >> << === TITULO
// --> <-- === SUBTITULO
//hOnCh === handlerOnChange
//secureTextEntry={true} === no mostrar el texto
//keyboardType === darle el un type a los inputs

//dispatch(actions)
//const users = useSelector(state => state.users)

export default ({route, navigation})=>{ 
//////////>> STATES <<//////////
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: route.params.email,
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
        address:'*'
    })

//THIS STATE IS TO HELP US IN THE DATES
    const [date, setDate] = useState({
        day: 1,
        month: 0,
        year: new Date().getFullYear() - 16
    })
    
    //THIS STATE IS TO HELP US IN THE ADRESS
    const [address, setAddress] = useState({
        street_1: '',
        number: '',
        street_2: ''
    })
    
/////////////>> SUPPORT <</////////////////
    //////-> FUNCTIONS <-//////
    const withoutErrorLocation = () => {
        if(address.street_1 && address.street_2 && address.number) return false
        else return true
    }

    //SEARCH THE LOCATION WITH THE API
    const searchDirection = ()=>{
        const street = address.street_1 + ' y ' + address.street_2
        api_adress(street, address.number, newUser, setNewUser, error, setError)
    }

    //SEND A STRING OF THE LOCATION
    const location = ()=>{
        const loc = newUser.address.split(',')
        return loc[2] + ', ' + loc[3] + ',\n' + loc[4]
    }

    //WHITOUT ERROR CAN WE GO TO THE NEXT REGISTER
    const withoutError = ()=>{
        if(error.firstName || error.lastName || error.documentNumber || error.address) return true
        else return false
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
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }
/////////////////////////////////////////////////////////////////////////////

    return(
        <ImageBackground source={Background} style={style.container}>
            <Text style={style.mainTitle}>Client Register</Text>
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
                    <Text style={style.label}>Doc. Type</Text>
                    <Picker style={style.inputDoc}
                    name='documentType' onValueChange={hOnCh_NewUser}>
                        <Picker.Item key={1} label='DNI' value='DNI'/>
                        <Picker.Item key={2} label='Pas' value='Pasaporte'/>
                    </Picker>
                </View>
                {/*//////////////->DOCUMENT NUMBER<-//////////////*/}
                <View style={style.docN}>
                    <Text style={error.documentNumber ? style.error : style.label}>Number</Text>
                    <TextInput style={style.inputDocNum} keyboardType='numeric' editable name='documentNumber' onChange={hOnCh_NewUser}/>
                </View>
            </View>

{/*///////////////////////////////////>>> BIRTH <<<///////////////////////////////////*/}
            <Text style={style.label}>Birth date</Text>
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

{/*///////////////////////////////////>>> ADDRESS <<<///////////////////////////////////*/}
            <Text style={error.address ? style.error : style.label}>Address</Text>
            <View style={style.adressContainer}>
            <Text style={style.subLabel}>Principal Street</Text>
                <View style={style.streetPrincipal}>                    
                    <TextInput style={style.inputStreet} editable name='street_1' onChange={hOnCh_Adress}/>
                    <TextInput style={style.inputSubStreet} keyboardType='numeric' 
                    editable name='number' onChange={hOnCh_Adress} placeholder='N°'/>
                </View>
                <View>
                    <Text style={style.subLabel}>One street that cuts the principal</Text>
                    <TextInput style={style.inputR} editable name='street_2' onChange={hOnCh_Adress}/>
                </View>
                <TouchableHighlight onPress={searchDirection} disabled={withoutErrorLocation()}
                style={withoutErrorLocation() ? style.appButtonContainerFalse : style.appButtonContainer}>
                    <Text style={withoutErrorLocation() ? style.appButtonTextFalse : style.appButtonText}>SEARCH</Text>
                </TouchableHighlight>
            </View>         

            <Text style={newUser.address ? style.locationY : style.locationX}>{newUser.address ? location() : 'City'}</Text>   
            
{/*//////////////////////////////////////////////////////////////////////////////*/}
            <TouchableHighlight disabled={withoutError()} onPress={()=> navigation.navigate('Next Register',{
                info:newUser
            })} style={withoutError() ? style.appButtonContainerFalse : style.appButtonContainer}>
                <Text style={withoutErrorLocation() ? style.appButtonTextFalse : style.appButtonText}>NEXT </Text>
            </TouchableHighlight>

        </ImageBackground>
    )
}

