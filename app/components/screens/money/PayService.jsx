import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {View, Text, TextInput, ImageBackground, TouchableHighlight, Picker} from 'react-native';
import {get_service, pay_service, transactions_get, get_user__me} from '../../../redux/actions.js'

import style from '../money/styles/PayServiceStyles'

import Background from '../../../assets/background.png'


export default ({ navigation }) => {

const dispatch = useDispatch()
const services = useSelector(state => state.services)

const [change, setChange] = useState(false)

 //////////>> STATES <<///////////
const [send, setSend] = useState({
  balance:0,
  serviceId:""
})

const [confirm, setConfirm] = useState(false)

 //////////>> HANDLER ON CHANGE (hOnCh) <<////////////
const handleChange = e =>{
    setSend({
    ...send, 
      balance:e.target.value})
  }
const handleOnChange = e =>{
    setSend({
    ...send, 
      serviceId:e })
  }

const hOnCh = ()=>{
  setConfirm(!confirm)
}
 //////////>> DISPATCHS <<///////////////
  const payService = () =>{
    try {
      pay_service(send, setChange)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
  dispatch(get_service())
  }, [])

  useEffect(() => {
    if (change) {
      dispatch(get_user__me())
      dispatch(transactions_get())
      setChange(false)
      navigation.navigate('Main')
    }  
  }, [change])

  return (

    <ImageBackground source={Background} style={style.container}>
      
      <View style={style.containerInput}>

        <Text style={style.text}>Pay Services</Text>
            
          {!confirm ?

          <View>
          <Picker 
            style={style.service}
            name='serviceId'
            onValueChange={handleOnChange}>

              <Picker.Item 
              label="Select Service..."
              value="Select Service..." 
              enabled={false}/>
              
                {services.map((service) => {
                  return (
                  <Picker.Item 
                  label={service.name}
                  value={service.id}/>)
                  })}
            </Picker> 
          
          <TextInput editable style={style.inputs} name='balance'
          keyboardType='numeric' onChange={handleChange}
          placeholder='$$$$$$'/>

        <TouchableHighlight onPress={hOnCh} style={style.btn}>
            <Text style={style.appButtonText}> NEXT </Text>
        </TouchableHighlight>
        </View>
          :
        <View style={style.confirmData}>
          <Text style={style.subTitleConfirm}>Are you sure pay</Text>
          <Text style={style.moneyConfirm}>${send.balance}</Text>           

        <TouchableHighlight onPress={payService} style={style.btn}>
            <Text style={style.appButtonText}> YES </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={hOnCh} style={style.btn}>
            <Text style={style.appButtonText}> NO </Text>
        </TouchableHighlight> 
        </View>
        }

      </View>  
          
    </ImageBackground>
  )
}