///////////////////>> MODULS <<///////////////////
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {View, Text, TextInput, ImageBackground, TouchableHighlight} from 'react-native'
import { Button } from 'react-native-elements'

///////////////////>> SCRIPTS <<///////////////////
import style from './styles/RegisterStyle'
import { location_get } from '../../../redux/actions'
import validate from './supports/Validation_Register'
import * as D from './supports/Date_Register' //Functions to Date Register

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

    const dispatch = useDispatch()
    
//////////>> STATES <<//////////
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: route.params.email,
        documentType: '',
        documentNumber: 0,
        birth: new Date((new Date().getFullYear() - 16), 0, 1),
        phoneNumber: 0,
        password:'',
        address:''
    })
//THIS STATE IS TO HELP US VALIDATE THE INPUTS OF THE USERS
    const [error, setError] = useState({
        firstName: 'Name *',
        lastName:'Surname *',
        documentType:'Type *',
        documentNumber:'Number *',
        birth: 'Birth date *',
        address:'Address *'
    })

//THIS STATE IS TO HELP US IN THE DATES
    const [date, setDate] = useState({
        day: 1,
        month: 0,
        year: new Date().getFullYear() - 16
    })
    
    //THIS STATE IS TO HELP US IN THE ADRESS
    const [address, setAddress] = useState({
        street1: '',
        number: '',
        street2: ''
    })

    const [loading, setLoading] = useState(false)
    
/////////////>> SUPPORT <</////////////////
    //////-> FUNCTIONS <-//////
    const withoutErrorLocation = () => {
        if(address.street1 && address.street2 && address.number) return false
        else return true
    }

    //SEARCH THE LOCATION WITH THE API
    const searchDirection = ()=>{   
        setLoading(true)     
        dispatch(location_get(address, newUser, setNewUser, error, setError, setLoading))
    }

    //SEND A STRING OF THE LOCATION
    const location = ()=>{
        const loc = newUser.address.split(',')
        return loc[2] + ', ' + loc[3] + ',\n' + loc[4]
    }

    //WHITOUT ERROR CAN WE GO TO THE NEXT REGISTER
    const withoutError = ()=>{
        if(error.firstName || error.lastName || error.docType
            || error.documentNumber || error.address || error.birthDay) return true
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
                id[1] = parseInt(id[1]) - 1
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

        console.log(newUser.birth)
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
            <Text style={style.label}>{error?.firstName ?? 'Name'}</Text>
            <TextInput style={style.inputR} editable name='firstName' onChange={hOnCh_NewUser}/>
            {/*//////////////->LAST NAME<-//////////////*/}
            <Text style={style.label}>{error?.lastName ?? 'Surname'}</Text>
            <TextInput style={style.inputR} editable name='lastName' onChange={hOnCh_NewUser}/>         
            

{/*///////////////////////////////////>>> DOCUMENT <<<///////////////////////////////////*/}
            <View style={style.docContainer}>
                {/*//////////////->DOCUMENT TYPE<-//////////////*/}
                <View style={style.docType}>
                    <Text style={style.label2}>{error?.documentType ?? 'Type'}</Text>
                    <TextInput style={style.inputDoc} name='documentType' onChange={hOnCh_NewUser} placeholder='DNI/PASS  '/>
                </View>
                {/*//////////////->DOCUMENT NUMBER<-//////////////*/}
                <View style={style.docN}>
                    <Text style={style.label2}>{error?.documentNumber ?? 'Number'}</Text>
                    <TextInput style={style.inputDocNum} keyboardType='numeric' editable name='documentNumber' onChange={hOnCh_NewUser}/>
                </View>
            </View>

{/*///////////////////////////////////>>> BIRTH <<<///////////////////////////////////*/}
            <Text style={style.label}>{error?.birth ?? 'Birth date'}</Text>
            <View style={style.birth}>
                <TextInput style={style.date} placeholder='DD ' keyboardType='numeric' onChangeText={(e)=>hOnCh_Birth('1-' + e)}/>
                <TextInput style={style.date} placeholder='MM ' keyboardType='numeric' onChangeText={(e)=>hOnCh_Birth('2-' + e)}/>
                <TextInput style={style.date} placeholder='YYYY ' keyboardType='numeric' onChangeText={(e)=>hOnCh_Birth('3-' + e)}/>
            </View>            

{/*///////////////////////////////////>>> ADDRESS <<<///////////////////////////////////*/}
            <Text style={style.label}>{error?.address ?? 'Address'}</Text>
            <View style={style.adressContainer}>
            <Text style={style.subLabel}>Street</Text>
                <View style={style.streetPrincipal}>                    
                    <TextInput style={style.inputStreet} editable name='street1' 
                    onChange={hOnCh_Adress} placeholder='  Principal'/>
                    <TextInput style={style.inputSubStreet} keyboardType='numeric' 
                    editable name='number' onChange={hOnCh_Adress} placeholder='N°'/>
                </View>
                <View>
                    <Text style={style.subLabel}>And</Text>
                    <TextInput style={style.inputR} editable name='street2' onChange={hOnCh_Adress}/>
                </View>

                <Button title='Search' onPress={searchDirection} disabled={withoutErrorLocation()} loading={loading}
                disabledStyle={style.appButtonContainerFalse} 
                disabledTitleStyle={style.appButtonTextFalse}
                titleStyle={style.appButtonText}
                buttonStyle={style.appButtonContainer}/>
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

