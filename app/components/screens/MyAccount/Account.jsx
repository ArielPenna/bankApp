//////////////>> MODULES <<///////////
import React from "react";
import { View, Text, Image, ImageBackground, TouchableHighlight, Clipboard } from "react-native";

/////////////>> SCRIPTS <<///////////
import styles from "./styles/AccountStyle";

////////////>> IMGS <<//////////
import Background from "../../../assets/background.png";
import AssociateCVU from "../../../assets/asociarcvu.png"
import ShareCVU from "../../../assets/compartircvu.png"

export default ({ route, navigation }) => {

  /////////>> PARAMS <<///////////
  const { name, cvu } = route.params

  ////////>> SUPPORT <<///////////

  ///////>> VAR <<//////////// 
  const idCVU = "p1" //This is for have the id of the 

  ///////>> FUNCTION <<//////////
  const copyToClipboard = ()=>{
    Clipboard.setString(cvu) //With this we can copy the URL (Warning)
  }
  
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View style={styles.mainView}>
        {/*/////////////>> INFO BOX <<///////////////*/}
        <View style={styles.cvuaccount}>

            {/*/////------->> NAME <<-------////*/}          
            <Text style={styles.textaccount}>Client:</Text>
            <Text style={styles.textaccount}>{name}</Text>

            {/*/////------->> CVU <<-------////*/}   
            <Text style={styles.textaccount}>CVU:</Text>
            <Text style={styles.textaccount} id={idCVU}> { cvu } </Text>
        </View>

        {/*/////////////>> BUTTONS <<///////////////*/}
        <View style={styles.row}>

          {/*/////------->> ASSOCIATE CVU <<-------////*/}   
          <TouchableHighlight onPress={() => navigation.navigate("")}>
            <View style={styles.touch}>
              <Image style={styles.ico} source={AssociateCVU} />
              <Text style={styles.small}>Associate CVU</Text>
            </View>
          </TouchableHighlight>

          {/*/////------->> SHARE CVU <<-------////*/} 
          <TouchableHighlight onPress={ copyToClipboard }>        
            <View style={styles.touch}>
              <Image style={styles.ico} source={ShareCVU} />
              <Text style={styles.small}>Share cvu</Text>
            </View>
          </TouchableHighlight>
        </View>      
      {/*/////////////////////////////////////////////////*/} 
      </View>            
    </ImageBackground>
  )
}

