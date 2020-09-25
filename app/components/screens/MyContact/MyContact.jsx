////////////>> MODULES <</////////////
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { View, Text, TextInput, TouchableHighlight, ImageBackground} from 'react-native';
import {Card, Icon} from 'react-native-elements'

/////////////>> SCRIPTS <<//////////////
import {get_friends} from '../../../redux/actions.js'
import {contacts} from './prueba/prueba.js'
import style from './styles/MyContactStyles'

////////////>> IMGS <<////////////////
import Background from '../../../assets/background.png'

export default ({ route, navigation }) => {

  ////////>> REDUX <<//////////
  const dispatch = useDispatch()
  const contact = useSelector(state => state.contacts)
  const user = useSelector(state => state.user)

  ////////>> STATES <<////////
  const [search, setSearch] = useState('')
  const [change, setChange] = useState('')

  //////>> SUPPORT <<///////

  ///---> FUNCTIONS <---///

  //This function is to filter the array we have 
  //with the user type on the search bar 
  const filter = contact.filter(c => {
    return c.nickName.toLowerCase().includes(search.toLowerCase())
  })

  ///////>> HANDLER ON CHANGES (hOnCh) <<///////
  const hOnCh_Search = (e)=>{
    setSearch(e)
  }

  useEffect(() => {
    dispatch(get_friends())
    setChange('')
  }, [change])  

  return (
    <ImageBackground source={Background} style={style.container} >
      <View>
        {/*/////////>> TITLE <</////////*/}
        <Text style={style.title}>My Contacts</Text>

          {/*/////////>> SEARCH <</////////*/}
          <View style={style.searchContainer}>
              <View style={style.btnSearch}>
                {/*/////////>> ICON <</////////*/}
            <Icon raised name='search'
              type='font-awesome' color='black' style={style.ico}/>
              </View>
            <TextInput style={style.inputStyle} onChangeText={hOnCh_Search} placeholder="Search contact..."/>  
          </View>

        {/*/////////>> ADD CONTACT BUTTON <</////////*/}
        <TouchableHighlight style={style.btn} onPress={()=> navigation.navigate('Add Contact', { update: setChange })}>
            <Text style={style.appButtonText}> +ADD CONTACT </Text>
        </TouchableHighlight>

        {/*/////////>> CARDS <</////////*/}
        {contact.length ? filter.map(c => {
          //THIS IS THE OBJ WE SEND TO ONLY CONTACT
          const onlyContact = {
            idFriend: c.friended, 
            nickName: c.nickName, 
            update: setChange,
            chng: route.params.chng,
            total: route.params.total
          }

          return (
              <Card style={style.cardContainer} >
                <Card.Title style={style.cardTitle} onPress={()=>navigation.navigate('OnlyContact', onlyContact)}>
                  {c.nickName}
                </Card.Title>
                  <Card.Divider/>
                    <View >
                      <Text style={style.cardText} onPress={()=>navigation.navigate('OnlyContact', onlyContact)}>{c.email}</Text>
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

