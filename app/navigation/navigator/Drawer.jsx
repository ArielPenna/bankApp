///////////>> MODULES <<////////////
import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { Block, Text, Button } from 'expo-ui-kit'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack"
import { useDispatch, useSelector } from 'react-redux'

///////////>> SCRIPTS <<////////////
import * as render from '../../components/imports/AppImports'
import { logout, get_user__me, transactions_get } from '../../redux/actions'

///////////>> IMGS <<////////////
import Logo from '../../assets/logo.png'
import Main from '../../assets/homepage.png'
import MyAccount from '../../assets/datos.png'
import MyContacts from '../../assets/miscontactos.png'
import MyCard from '../../assets/mitarjeta.png'
import Transactions from '../../assets/transacciones.png'
import SendMoney from '../../assets/enviarDinero.png'
import Statistics from '../../assets/estadisticas.png'
import Recharge from '../../assets/saldo.png'
import Menu from '../../assets/list.png'
import Logout from '../../assets/logout.png'
import Services from '../../assets/servicios.png'

import styles from "./drawerStyles";

////////////>> VARS <</////////
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

/////////////>> DRAWER CONTENT AND STYLE <<//////////////
const DrawerContent = props => {
    const dispatch = useDispatch() //This is to dispatch the Logout
    const state = useSelector(state => state)
    const [change, setChange] = useState('')

    return (
        <DrawerContentScrollView {...props}>

            {/*////////////>> IMG <</////////////////*/}
            <Block flex={0.4} margin={20}>
                <Image source={Logo} style={styles.logo} resizeMode='center'/>
                <Text title>BankApp Me</Text>
                <Text size={9}>The better way to bank</Text>
            </Block>
            
            {/*////////////>> DRAWER ITEM LIST //////////////////*/}
            <Block>
                <DrawerItem 
                    label="Main"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={Main} style={styles.img}/>)}}
                    onPress={()=> props.navigation.navigate("Main", {change, setChange})}
                />

                <DrawerItem 
                    label="Profile"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={MyAccount} style={styles.img}/>)}}
                    onPress={()=> props.navigation.navigate("MyProfile", {
                        myProfile: state.user,
                        editProfile: setChange
                    })}
                />

                <DrawerItem 
                    label="Contacts"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={MyContacts} style={styles.img}/>)}}
                    onPress={()=> props.navigation.navigate("MyContact",{chng: setChange, total: state.fullBalance?.total})}
                />

                <DrawerItem 
                    label="Card"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={MyCard} style={styles.img}/>)}}
                    onPress={()=> props.navigation.navigate("MyCard", {user: state.user})}
                />

                <DrawerItem 
                    label="Transactions"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={Transactions} style={styles.img}/>)}}
                    onPress={()=> props.navigation.navigate("Transactions")}
                />

                <DrawerItem 
                    label="Recharge"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={Recharge} style={styles.img}/>)}}
                    onPress={()=> props.navigation.navigate("Recharge", {chng: setChange})}
                />

                <DrawerItem 
                    label="Pay Service"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={Services} style={styles.img}/>)}}
                    onPress={()=> props.navigation.navigate("PayService", {chng: setChange})}
                />

                <DrawerItem 
                label="Send Money"
                labelStyle = {{marginLeft: -20}}
                icon={()=>{return (<Image source={SendMoney} style={styles.img}/>)}}
                onPress={()=> props.navigation.navigate("Send Money to Contacts", {chng: setChange, total: state.fullBalance?.total})}
                />

                <DrawerItem 
                label="Statistics"
                labelStyle = {{marginLeft: -20}}
                icon={()=>{return (<Image source={Statistics} style={styles.img}/>)}}
                onPress={()=> props.navigation.navigate("Statistics", {
                    fullBalance: state.fullBalance, 
                    user:state.user,
                    transactions:state.transactions
                })}
                />

            </Block>

            {/*/////////////>> LOGOUT <<//////////////*/}
            <Block>
                <DrawerItem 
                    label="Logout"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={Logout} style={styles.img}/>)}}
                    onPress={()=> {
                        dispatch(logout())
                        props.navigation.navigate("Home")
                    }}
                />
            </Block>

        </DrawerContentScrollView>
    )
}

const Screens = ({navigation})=>{
    return (
    <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: ()=>(
            <Button primary padding color={"#f7b700"} marginHorizontal onPress={()=>{navigation.openDrawer()}}>
                <Image source={Menu} style={styles.img}/>
            </Button>
        )
    }}>

        {/*/////////////////////>> HOME <</////////////////////*/}
        <Stack.Screen name="Home" component={render.Home} options={{headerShown: false}}/>{/* NOT HEADER */}

        {/*/////////////////////>> REGISTER <</////////////////////*/}
        <Stack.Screen name='Register' component={render.Register_Email} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700" onPress={()=>{navigation.navigate('Home')}}/>)
        }}/>{/* BACK TO HOME */}
        <Stack.Screen name="Code" component={render.Code} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700"  onPress={()=>{navigation.navigate('Register')}}/>)
        }}/>{/* BACK TO REGISTER */}
        <Stack.Screen name="Register Info" component={render.Register_One} options={{headerShown:false}}/>{/* NOT HEADER */}
        <Stack.Screen name="Next Register" component={render.Register_Two} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700"  onPress={()=>{navigation.navigate('Register Info')}}/>)
        }}/>{/* BACK TO REGISTER INFO */}

        {/*/////////////////////>> LOGIN <</////////////////////*/}
        <Stack.Screen name="Login" component={render.Login} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700"  onPress={()=>{navigation.navigate('Home')}}/>)
        }}/>{/* BACK TO HOME */}

        {/*/////////////////////>> MAIN <</////////////////////*/}
        <Stack.Screen name="Main" component={render.Main}/>
        {/*///////-> TRANSACTIONS <-////////*/}
        <Stack.Screen name="Transactions" component={render.Transactions}/>
        
        {/*///////-> STATISTICS <-////////*/}
        <Stack.Screen name="Statistics" component={render.Statistics}/>

        {/*///////-> MY PROFILE <-////////*/}
        <Stack.Screen name="MyProfile" component={render.MyProfile}/>
        <Stack.Screen name="EditProfile" component={render.EditProfile} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700" onPress={()=>{navigation.navigate('MyProfile')}}/>)
        }}/>{/* BACK TO My Profile */}

        {/*///////-> MY PRODUCTS <-////////*/}
        <Stack.Screen name="MyProducts" component={render.MyProducts}/>

        {/*//--> MY ACCOUNT <--//*/}
        <Stack.Screen name="Account" component={render.Account}/>

        {/*//--> MY CARD <--//*/}
        <Stack.Screen name="MyCard" component={render.MyCard}/>

        {/*//--> MY CONTACTS <--//*/}
        <Stack.Screen name="MyContact" component={render.MyContact}/>
        <Stack.Screen name="OnlyContact" component={render.OnlyContact} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700" onPress={()=>{navigation.navigate('MyContact')}}/>)
        }}/>{/* BACK TO My Contact */}
        <Stack.Screen name="Add Contact" component={render.AddContact} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700" onPress={()=>{navigation.navigate('MyContact')}}/>)
        }}/>{/* BACK TO My Contact */}
        <Stack.Screen name="Edit Contact" component={render.EditContact} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700" onPress={()=>{navigation.navigate('OnlyContact')}}/>)
        }}/>{/* BACK TO My Contact */}

        {/*///////-> RECHARGE <-////////*/}
        <Stack.Screen name="Recharge" component={render.Recharge}/>
        <Stack.Screen name='ValidateCharge' component={render.ValidateCharge}/>

        {/*///////-> PAY SERVICE <-////////*/}
        <Stack.Screen name="PayService" component={render.PayService}/>

        {/*///////-> SEND MONEY <-////////*/}
        <Stack.Screen name="Send Money to Contacts" component={render.SendMoneyContacts}/>
        <Stack.Screen name="Send Money" component={render.SendMoney} options={{headerLeft:
            ()=> (<HeaderBackButton color="#f7b700" onPress={()=>{navigation.navigate('Send Money to Contacts')}}/>)
        }}/>{/* BACK TO Send Money to Contacts */}


    </Stack.Navigator>)
}

export default () => {
    return(
    <Drawer.Navigator 
    initialRouteName="Home" 
    drawerType="slide"
    overlayColor="transparent"
    drawerStyle={{width: "55%", backgroundColor: "#f7b700"}}
    contentContainerStyle={{flex: 1}}
    sceneContainerStyle={{backgroundColor: 'red'}}
    drawerContent={props => <DrawerContent {...props}/>}>

        <Drawer.Screen name="Screens" component={Screens}/>
    </Drawer.Navigator>
    )
}