import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TextInput, ImageBackground } from 'react-native'
import { Card, Icon } from 'react-native-elements'

import { get_friends } from '../../../redux/actions'
import style from './styles/SendMoneyContactsStyles'

import Background from '../../../assets/background.png'

export default ({ route, navigation }) => {
    const dispatch = useDispatch()
    const friends = useSelector(state => state.contacts)

    const [search, setSearch] = useState('')

    const filter = friends.filter(c => {
        return c.nickName.toLowerCase().includes(search.toLowerCase())
    })

    ///////>> HANDLER ON CHANGES (hOnCh) <<///////
    const hOnCh_Search = (e)=>{
        setSearch(e)
    }

    useEffect(()=>{
        dispatch(get_friends())
    }, [])

    return (
        <ImageBackground source={Background} style={{flex:1}}>
            <View>
                {/*/////////>> TITLE <</////////*/}
                <Text style={style.title}>Send Money</Text>

                {/*/////////>> SEARCH <</////////*/}
                <View style={style.searchContainer}>
                    <View>
                        {/*/////////>> ICON <</////////*/}
                        <Icon raised name='search'
                        type='font-awesome' color='black'/>
                    </View>
                    <TextInput style={style.inputStyle} onChangeText={hOnCh_Search} 
                    placeholder="Search contact..."/>  
                </View>

            {/*/////////>> CARDS <</////////*/}
            {friends.length ? filter.map(c => {
                //THIS IS THE OBJ WE SEND TO SEND MONEY
                const sendMoney = {
                    idFriend: c.friended, 
                    nickName: c.nickName,
                    changeTransaction: route.params.chng,
                    total: route.params.total
                }

                return (
                    <Card>
                        <Card.Title style={style.cardTitle} onPress={()=>navigation.navigate('Send Money', sendMoney)}>
                        {c.nickName}
                        </Card.Title>
                        <Card.Divider/>
                        <View >
                        <Text style={style.cardText} onPress={()=>navigation.navigate('Send Money', sendMoney)}>{c.email}</Text>
                        </View>
                    </Card>
                )
                })
                :
                <Text style={style.cardText}> You haven't added any friends yet </Text>
                }

            </View>
        </ImageBackground>
    )
}