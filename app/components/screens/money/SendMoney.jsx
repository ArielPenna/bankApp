//////////////>> MODELS <<//////////////
import React,{ useState } from 'react';
import { useDispatch } from 'react-redux'
import { View, Text, TextInput ,ImageBackground, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements'

//////////////>> SCRIPTS <<//////////////
import styles from './styles/SendMoneyStyles'

//////////////>> IMGS <<//////////////
import Background from '../../../assets/background.png'

export default ({ navigation }) => {

  const dispatch = useDispatch()

  //////////>> STATES <<///////////
  const [send, setSend] = useState({
    send: '',
    emailFriend: ''
  })

  const [error, setError] = useState({
    send: '*',
    emailFriend: '*'
  })

  const [sure, setSure] = useState(false)

  ///////////>> SUPPORTS <<//////////

  //-----------> VARS <-------------//
  const regex_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; 

  ////-> FUNCTIONS <-/////
  const validation = (input) =>{
    let error = {}
    
    if(!input.send){
      error.send = '*'
    }
    else if(parseInt(input.send) < 100){
      error.send = '*'
    }

    if(!input.emailFriend){
        error.emailFriend = '*';
    }
    else if(!regex_email.test(input.emailFriend)){
        error.emailFriend = 'Email invalido *';
    }

    return error
  }
  
  const withoutError = () => {
    if(error.emailFriend || error.send) return true
    else return false
  }

  //////////>> HANDLER ON CHANGE (hOnCh) <<////////////
  const hOnCh_Send = e =>{
    setError(validation({
      ...send,
      [e.target.name]: [e.target.value]
    }))

    setSend({
      ...send,
      [e.target.name]: [e.target.value]
    })
  }

  const hOnCh_Sure = () => {
    setSure(!sure)
  }

  //////////>> DISPATCHS <<///////////////
  const sendMoney = ()=> {
    try{
      console.log('dinero enviado')
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        {/*////////////>> TITLE <<///////////////*/}
        <Text style={styles.mainTitle}>Send Money</Text>   

        {/* *********   INSERT IMG SEND MONEY ****************/}

        {/*////////////>> INPUTS <<///////////////*/}
        {!sure ? 
        /*////////--->> MONEY TO SEND <<---////////////*/
        <View style={styles.containerInputs}>
          <Text style={styles.subTitle}>Quantity:</Text>
          <TextInput editable style={styles.inputs} name='send' 
          keyboardType='numeric' onChange={hOnCh_Send} placeholder={send.send ? `$${send.send}` : '$$$$$$'}/> 
          
          {/*////////--->> EMAIL FROM THE FRIEND <<---////////////*/}
          <Text style={styles.subTitle}>To:</Text>
          <TextInput editable style={styles.inputs} name='emailFriend' 
          onChange={hOnCh_Send} placeholder={send.emailFriend ? `${send.emailFriend}` : 'friend@henrybank.com'}/>

          {/*////////////>> BUTTONS TO SEND <<///////////////*/}
          <TouchableHighlight onPress={hOnCh_Sure} disabled={withoutError()}
          style={withoutError() ? styles.appButtonContainerFalse : styles.appButtonContainer}>
            <Text style={withoutError() ? styles.appButtonTextFalse : styles.appButtonText}> 
            Send </Text>
          </TouchableHighlight> 
        </View>

        : ////////IF YOU PRESS THE BUTTON SEND WILL APPEAR ALL THIS ///////////

          <View>
            {/*/////////>> SUB TITLE <<///////////*/}
            <Text style={styles.subTitle}>Are you sure send</Text>

            {/*/////////>> INFO <<///////////*/}
            <Text style={styles.subTitle}>${send.send} to</Text>
            <Text style={styles.subTitle}>{send.emailFriend} ? </Text>

            {/*/////////>> BUTTONS <<///////////*/}
            <View>

              {/*/////////>> BUTTON TO CONFIRM <<///////////*/}
              <TouchableHighlight onPress={sendMoney} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}> Yes </Text>
              </TouchableHighlight> 

              {/*/////////>> BUTTON TO GO BACK <<///////////*/}
              <TouchableHighlight onPress={hOnCh_Sure} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}> No </Text>
              </TouchableHighlight> 
            </View>
          </View>
        }

      </View>      
    </ImageBackground>
  )
}