/////////////>> MODULES <<//////////
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

////////////>> SCRIPTS <<//////////
import store from "./redux/store";
import Drawer from "./navigation/navigator/Drawer"

export default function App({navigation}) {
  console.log(navigation)
  return (
    <Provider store={store}>
      <NavigationContainer>
<<<<<<< HEAD
      
        <Stack.Navigator>
          {/*/////////////////////>> HOME <</////////////////////*/}          
          <Stack.Screen name="Home" component={render.Home} options={headerOptions}/>

          {/*/////////////////////>> REGISTER <</////////////////////*/}
          <Stack.Screen name='Register' component={render.Register_Email} options={headerOptions}/>
          <Stack.Screen name="Code" component={render.Code} options={headerOptions}/>
          <Stack.Screen name="Register Info" component={render.Register_One} options={headerOptions}/>
          <Stack.Screen name="Next Register" component={render.Register_Two} options={headerOptions}/>

          {/*/////////////////////>> LOGIN <</////////////////////*/}
          <Stack.Screen name="Login" component={render.Login} options={headerOptions}/>

          {/*/////////////////////>> MAIN <</////////////////////*/}
          <Stack.Screen name="Main" component={render.Main} options={headerOptions}/>

          {/*///////-> TRANSACTIONS <-////////*/}
          <Stack.Screen name="Transactions" component={render.Transactions} options={headerOptions}/>
          
          {/*///////-> STATISTICS <-////////*/}
          <Stack.Screen name="Statistics" component={render.Statistics} options={headerOptions}/>

          {/*///////-> MY PROFILE <-////////*/}
          <Stack.Screen name="MyProfile" component={render.MyProfile} options={headerOptions}/>
          <Stack.Screen name="EditProfile" component={render.EditProfile} options={headerOptions}/>

          {/*///////-> MY PRODUCTS <-////////*/}
          <Stack.Screen name="MyProducts" component={render.MyProducts} options={headerOptions}/>

          {/*//--> MY ACCOUNT <--//*/}
          <Stack.Screen name="Account" component={render.Account} options={headerOptions}/>

          {/*//--> MY CARD <--//*/}
          <Stack.Screen name="MyCard" component={render.MyCard} options={headerOptions}/>

          {/*//--> MY CONTACTS <--//*/}
          <Stack.Screen name="MyContact" component={render.MyContact} options={headerOptions}/>
          <Stack.Screen name="OnlyContact" component={render.OnlyContact} options={headerOptions}/>
          <Stack.Screen name="Add Contact" component={render.AddContact} options={headerOptions}/>
          <Stack.Screen name="Edit Contact" component={render.EditContact} options={headerOptions}/>

          {/*//--> QUOTES <--//*/}
          <Stack.Screen name="Quotes" component={render.Quotes} options={headerOptions}/>

          {/*///////-> RECHARGE <-////////*/}
          <Stack.Screen name="Recharge" component={render.Recharge} options={headerOptions}/>
          <Stack.Screen name='ValidateCharge' component={render.ValidateCharge} options={headerOptions}/>

          {/*///////-> SEND MONEY <-////////*/}
          <Stack.Screen name="Send Money to Contacts" component={render.SendMoneyContacts} options={headerOptions}/>
          <Stack.Screen name="Send Money" component={render.SendMoney} options={headerOptions}/>      

        </Stack.Navigator>
      
=======
        <Drawer/>  
>>>>>>> 427deb4cff0738be3b63d2f0560b1de64296ba6f
      </NavigationContainer>
    </Provider>
  );
}