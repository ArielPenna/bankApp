import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   container:{
      flex:1
   },
   title:{
      marginLeft:75,
      marginTop:30,
      color:"white",
      width:200,
      fontSize:25,
      textAlign:"center",
      
   },
   containerInput:{
      marginLeft:15,
      marginTop:50,
      fontSize:30,
      height:500,
      width:350,
      borderRadius:15,
      backgroundColor:"white"
   },
   text:{
      fontSize:25,
      padding:15,
   },
   inputMoney:{
      display:"flex",
      marginTop:55,
      marginLeft:35,
      fontSize: 25,
      height:55,
      padding:15,
      borderRadius:8,
      width:250,
   },
   
   text2:{
      paddingLeft:15,
      paddingRight:15,
      paddingTop:25,
      fontSize:25,
      marginBottom:100
   },

   btn:{
      width: '90%',
      marginLeft: '20px',
      marginBottom: '10px',
      textAlign:"center",
      marginTop: -23,
      backgroundColor: "#009688",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
   },

   appButtonText:{
      color:"white",
      fontSize:25,

   }
})

export default styles