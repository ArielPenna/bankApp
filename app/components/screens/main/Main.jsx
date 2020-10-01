import React, {useEffect} from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/MainStyle";
import {get_user__me, transactions_get} from "../../../redux/actions"

///////////////////>> IMGS <<///////////////////
import Background from "../../../assets/background.png";

const Separator = () => <View style={styles.separator} />;

export default ({ route}) => {

  const dispatch = useDispatch()

  ///////>> STATE REDUX <<///////////
  const user = useSelector((state) => state.user);   
  const fullBalance = useSelector((state) => state.fullBalance);

  /////>> USE EFFECT <<///////
  useEffect(() => {
    dispatch(get_user__me()) //Dispatch to bringing the user active
    dispatch(transactions_get())//Dispatch to bringing the transactions from the user      
  }, []);

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Separator />
        <Separator />
        {/*////////////////////>> TOP <<////////////////*/}
        <View style={styles.top}>
          <View style={styles.row}>
            <View>
              {/*//////////////--->>>> PROFILE <<<<---///////////*/}
              <Text style={styles.mainTitle}>Hello, {user?.firstName}!</Text>
              <Image style={styles.img} source={user?.img} />
            </View>          
          </View>
        </View>

        <Separator />

        {/*////////////////////>> MAIN BOX <<////////////////*/}
        <View style={styles.generalView}>

          {/*//////////////--->>>> TITLE <<<<---///////////*/}
          <Text style={styles.money}>$ {user?.wallet ? user.wallet.balance : '0000'} </Text>
          <View style={styles.row}>
            <View style={styles.margin}>
              {/*//////////////--->>>> INCOME <<<<---///////////*/}
              <Text style={styles.income}>Income</Text>
              <Text style={styles.bigText}>$ {fullBalance?.credit ? fullBalance.credit : '0000'}</Text>
            </View>
            <View style={styles.margin}>
              {/*//////////////--->>>> OUTCOME <<<<---///////////*/}
              <Text style={styles.outcome}>Outcome</Text>
              <Text style={styles.bigText}>$ {fullBalance?.debit ? fullBalance.debit : '0000'}</Text>
            </View>
          </View>          
        </View>
        
            
      </View>
    </ImageBackground>
  );
};
