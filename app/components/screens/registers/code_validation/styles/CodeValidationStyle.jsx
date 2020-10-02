import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {     
      flex:1,   
      width: "100%",
      height: "100%",
      alignContent:"center",    
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#79d8aa",
    },

    input:{    
      alignSelf:"center",
      width:310,
      height:50,
      marginTop: 50,
      marginBottom:40,
      backgroundColor:'white',
      fontSize: 25,
      textAlign: 'center'
    },

    mainTitle:{
      fontSize: 40,
      color:"#fff",
      fontWeight: 'bold',
      textAlign:"center",
    },

    subTitle:{
      fontSize: 20,
      color:"#fff",
      fontWeight: 'bold',
      textAlign:"center",
      marginTop: 150
    },

    subTitleX:{
      fontSize: 25,
      color:"#fff",
      fontWeight: 'bold',
      textAlign:"center",
      marginTop: 50
    },

    appButtonContainerAgain: {
      width: '60%',
      marginLeft: '75px',
      marginBottom: 10,
      marginTop: 20,
      elevation: 8,
      backgroundColor: "#f7b700",       
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
    },

    appButtonTextAgain: {
      fontSize: 15,
      color: "#752667",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },

    appButtonContainer: {
      width: '90%',
      marginLeft: 20,
      marginBottom: 10,
      marginTop: 20,
      elevation: 8,
      backgroundColor: "#f7b700",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
    },

    appButtonContainerFalse: {
      width: '90%',
      marginLeft: 20,
      marginBottom: 10,
      marginTop: 20,
      elevation: 8,
      backgroundColor: "#752667",       
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
    },

    appButtonText: {
      fontSize: 18,
      color: "#752667",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },

    appButtonTextFalse: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
});
  
export default styles