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

export default ({ navigation }) => {

  ////////>> REDUX <<//////////
  const dispatch = useDispatch()
  const contact = useSelector(state => state.contacts)
  const user = useSelector(state => state.user)

  ////////>> STATES <<////////
  const [search, setSearch] = useState('')

  //////>> SUPPORT <<///////

  ///---> FUNCTIONS <---///

  //This function is to filter the array we have 
  //with the user type on the search bar 
  const filter = contacts.filter(c => {
    return c.name.toLowerCase().includes(search.toLowerCase())
  })

  ///////>> HANDLER ON CHANGES (hOnCh) <<///////
  const hOnCh_Search = (e)=>{
    setSearch(e)
  }

  useEffect(() => {
    dispatch(get_friends())
  }, [])  



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
                type='font-awesome' color='black'
                onPress={() => console.log('hello')} />
              </View>
            <TextInput style={style.inputStyle} onChangeText={hOnCh_Search} placeholder="Search contact..."/>  
          </View>

        {/*/////////>> ADD CONTACT BUTTON <</////////*/}
        <TouchableHighlight style={style.btn} onPress={()=> navigation.navigate('Add Contact', {id: user.id})}>
            <Text style={style.appButtonText}> +Add Contact </Text>
        </TouchableHighlight>

        {/*/////////>> CARDS <</////////*/}
        {contacts.length && filter.map(c => {
          return (
              <Card style={style.cardContainer} >
                <Card.Title style={style.cardTitle} onPress={()=>navigation.navigate('OnlyContact', c)}>
                  {c.name}
                </Card.Title>
                  <Card.Divider/>
                    <View >
                      <Text style={style.cardText} onPress={()=>navigation.navigate('OnlyContact', c)}>{c.email}</Text>
                    </View>
              </Card>
          )
          })
        }

      </View>      
    </ImageBackground>
  )
}

