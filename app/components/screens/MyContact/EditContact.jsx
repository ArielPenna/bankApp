//////////>> MODULES <</////////
import React, {useState} from 'react'
import { View, Text, TextInput, TouchableHighlight, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'

/////////>> SCRIPTS <<//////////
import { update_friend } from '../../../redux/actions'

////////>> IMGS <<////////////
import Background from '../../../assets/background.png'

export default ({route, navigation}) => {
    const dispatch = useDispatch()

    /////////>> STATES <<//////////
    const [friend, setFriend] = useState=({
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
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground source={Background} style={{flex:1}}>
            <View>
                <Text>Update Friend</Text>
                <TextInput editable placeholder={friend.nickName} onChangeText={hOnCh_Friend}/>
                <TouchableHighlight onPress={updateFriend}>
                    <Text>Update</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}