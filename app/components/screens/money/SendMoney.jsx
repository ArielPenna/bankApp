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

        {/*////////////>> INPUT <<///////////////*/}
        {!sure ? 
        /*////////--->> MONEY TO SEND <<---////////////*/
        <View style={styles.container2}>
          {/*////////--->> EMAIL FROM THE FRIEND <<---////////////*/}
          <View style={styles.confirmData}>
            <Text style={styles.subTitleConfirm}>Send to {nickName}:</Text> 
          </View>
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
            SEND </Text>
          </TouchableHighlight> 
        </View>
        
        : ////////IF YOU PRESS THE BUTTON SEND WILL APPEAR ALL THIS ///////////

          <View style={styles.container2}>
            
            <View style={styles.confirmData}>
              <Text style={styles.subTitleConfirm}>Are you sure send</Text>
              <Text style={styles.moneyConfirm}>${send.transaction}</Text>
              <Text style={styles.subTitleConfirm}> to {nickName} ? </Text>
            </View>
            {/*/////////>> BUTTONS <<///////////*/}
            <View>
              {/*/////////>> BUTTON TO CONFIRM <<///////////*/}
              <TouchableHighlight onPress={sendMoney} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}> YES </Text>
              </TouchableHighlight> 

              {/*/////////>> BUTTON TO GO BACK <<///////////*/}
              <TouchableHighlight onPress={hOnCh_Sure} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}> NO </Text>
              </TouchableHighlight> 
            </View>
          
          </View>
        
        }

      
      </View>      
    </ImageBackground>
  )
}