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
      marginLeft:75,
      marginTop:30,
      color:"#fff",
      width:200,
      fontSize:25,
      textAlign:"center",      
   },

   containerInput:{
      backgroundColor:"#ECE8AF",
      width:340,
      height:444,
      borderRadius:15,
      shadowOpacity: 0.57,
      shadowRadius: 15.19,
      elevation: 23,
   },

   text:{
      fontSize:25,
      padding:22,
   },
   
   inputMoney:{
      width:296,
      height:55,
      marginLeft: 17,
      marginTop:25,
      borderRadius: 15,
      backgroundColor:"#8F958B",
      fontSize: 20,
      textAlign: 'center',
   },
   
   text2:{
      paddingLeft:25,
      paddingRight:15,
      paddingTop:25,
      fontSize:25,
      marginBottom:58
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