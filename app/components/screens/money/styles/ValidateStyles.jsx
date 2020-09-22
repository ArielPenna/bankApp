import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

   container:{
      flex:1,   
      width: "100%",
      height: "100%",
      alignContent:"center",    
      justifyContent: "center",
      alignItems: "center",
   },
   title:{
      color:"#fff",
      width:200,
      fontSize:25,
      textAlign:"center",
      
   },
   container2:{
      backgroundColor:"#ECE8AF",
      width:340,
      height:520,
      borderRadius:15,
      shadowOpacity: 0.57,
      shadowRadius: 15.19,
      elevation: 23,
   },

   text:{
      flex:1,
      fontSize:25,
      padding:20,
   },

   numValidation:{
      flex:1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      color: "#fff",
      fontSize: 45,
   },
   btn:{
      width: '90%',
      marginLeft: '20px',
      marginBottom: '10px',
      marginTop: -23,
      backgroundColor: "#009688",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
   },
   appButtonText:{
      color:"#fff",
      fontSize:25,
      textAlign:"center"
   }

})

export default styles