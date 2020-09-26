//////////////>> MODELS <<//////////////
import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TextInput ,ImageBackground, TouchableHighlight} from 'react-native';

//////////////>> SCRIPTS <<//////////////
import styles from './styles/SendMoneyStyles'
import { get_one_friend, send_money, transactions_get, get_user__me } from '../../../redux/actions'

//////////////>> IMGS <<//////////////
import Background from '../../../assets/background.png'

export default ({ route, navigation }) => {

  const dispatch = useDispatch()

  const friend = useSelector(state => state.oneFriend)

  const { idFriend, nickName, total } = route.params

  const [change, setChange] = useState(false)  

  //////////>> STATES <<///////////
  const [send, setSend] = useState({
    transaction: 0
  })

  const [sure, setSure] = useState(false)

  //////////>> HANDLER ON CHANGE (hOnCh) <<////////////
  const hOnCh_Send = e =>{
      setSend({
        transaction: Number(e)
      })
    }

  const hOnCh_Sure = () => {
    setSure(!sure)
  }

  //////////>> DISPATCHS <<///////////////
  const sendMoney = ()=> {
    try{
      send_money(friend.account.cvu, send, setChange)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    dispatch(get_one_friend(idFriend))
  }, [])

  useEffect(()=>{
    if(change){
      dispatch(transactions_get())
      dispatch(get_user__me())
      setChange(false)
      navigation.navigate('Main')
    }    
  }, [change])

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        {/*////////////>> TITLE <<///////////////*/}
        {/* <Text style={styles.mainTitle}>Send Money</Text>    */}

        {/* *********   INSERT IMG SEND MONEY ****************/}

        {/*////////////>> INPUTS <<///////////////*/}
        {!sure ? 
        /*////////--->> MONEY TO SEND <<---////////////*/
        <View style={styles.containerInputs}>
          <Text style={styles.subTitleConfirm}>Quantity:</Text>
          <TextInput editable style={styles.inputs} name='send' 
          keyboardType='numeric' onChange={hOnCh_Send} placeholder={send.send ? `$${send.send}` : 'Enter an amount...'}/> 
        

        <View>
          {/*////////--->> EMAIL FROM THE FRIEND <<---////////////*/}
          <Text style={styles.subTitle}>Send to {nickName}:</Text> 
          <TextInput editable style={styles.inputs} name='send' 
          keyboardType='numeric' onChangeText={hOnCh_Send} 
          placeholder={send.transaction ? `$${send.transaction}` : '$$$$$$'}/> 
          
          {/*////////////>> BUTTONS TO SEND <<///////////////*/}
          <TouchableHighlight onPress={hOnCh_Sure}
          disabled={send.transaction > total || send.transaction < 100}
          style={send.transaction > total || send.transaction < 100 ? 
          styles.appButtonContainerFalse : styles.appButtonContainer} >
            <Text style={send.transaction > total || send.transaction < 100 ?
            styles.appButtonTextFalse : styles.appButtonText}> 
            Send </Text>
          </TouchableHighlight> 
        </View>
        
        : ////////IF YOU PRESS THE BUTTON SEND WILL APPEAR ALL THIS ///////////

          <View style={styles.containerConfirm}>
            {/*/////////>> SUB TITLE <<///////////*/}
            <Text style={styles.subTitleConfirm}>Are you sure send</Text>

            {/*/////////>> INFO <<///////////*/}
            <Text style={styles.subTitleConfirm}>${send.transaction} to</Text>
            <Text style={styles.subTitleConfirm}>{nickName} ? </Text>

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