////////////>> MODULES <<///////////
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TextInput, ImageBackground } from 'react-native'
import { Card, Icon } from 'react-native-elements'

///////////>> SCRIPTS <</////////////
import Pagination from '../../support/Pagination'
import { get_friends } from '../../../redux/actions'
import style from './styles/SendMoneyContactsStyles'

//////////>> IMGS <<////////////
import Background from '../../../assets/background.png'

export default ({ route, navigation }) => {
    const dispatch = useDispatch()
    const friends = useSelector(state => state.contacts)

    const [search, setSearch] = useState('')

    const filter = friends.filter(c => {
        return c.nickName.toLowerCase().includes(search.toLowerCase())
    })

    /////-->> PAGINATION <<--//////// 
    ////////>> STATES <<//////////
    const [currentPage, setCurrent] = useState(1)
    const [ByPage] = useState(4)

    ///////>> VARS <</////////
    const total = filter.length
    const last = currentPage * ByPage
    const first = last - ByPage
    const current = filter.slice(first, last)

    //////>> FUNCTIONS  <<//////
    const changePage = (e) => {
    setCurrent(e)
    }

    //////---------------------------//////////////

    ///////>> HANDLER ON CHANGES (hOnCh) <<///////
    const hOnCh_Search = (e)=>{
        setSearch(e)
    }

    useEffect(()=>{
        dispatch(get_friends())
    }, [])

    return (
        <ImageBackground source={Background} style={style.container}>
            <View style={style.container}>
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
            {current.length ? current.map(c => {
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
                {current.length > 4 && <Pagination value={{total, ByPage, changePage}}/>}
            </View>
        </ImageBackground>
    )
}