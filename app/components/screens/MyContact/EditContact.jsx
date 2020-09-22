//////////>> MODULES <</////////
import React, {useState} from 'react'
import { View, Text, TextInput, TouchableHighlight, ImageBackground } from 'react-native'
import style from './styles/EditContact_Styles'
import { useDispatch } from 'react-redux'

/////////>> SCRIPTS <<//////////
import { update_friend } from '../../../redux/actions'

////////>> IMGS <<////////////
import Background from '../../../assets/background.png'

export default ({route, navigation}) => {
    const dispatch = useDispatch()

    const { update } = route.params

    /////////>> STATES <<//////////
    const [friend, setFriend] = useState({
        idFriend: route.params.id,
        nickName: route.params.nickName
    })

     ////////>> HANDLER ON CHANGES (hOnCh) <</////////
    const hOnCh_Friend = (e)=>{
        setFriend({
            ...friend,
            nickName: e
        })
    } 

    //////////>> DISPATCH <<////////////
    const updateFriend = () => {
        try{
            dispatch(update_friend(friend))
            update('UPDATE')
            navigation.navigate('MyContact')
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground source={Background} style={style.container}>
            <View style={style.containerInput}>
                <Text style={style.title}>Update Friend</Text>
                <TextInput style={style.input} editable placeholder={friend.nickName} onChangeText={hOnCh_Friend}/>
                <TouchableHighlight style={style.btn} onPress={updateFriend}>
                    <Text style={style.textBtn}>Update</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}