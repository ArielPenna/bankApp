import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex:1,
      alignContent:"center",    
      justifyContent: "center",
      alignItems: "center" 
   },

   name:{
      color: "white",
      fontSize: 45,
      display: "flex",
      justifyContent: "center",
      marginBottom:25
   },

  containerDate:{
      backgroundColor:"white",
      width:350,
      borderRadius:25,
      marginBottom:30,
      padding:10
   },


   titulo:{
      fontSize:25,
      fontFamily: "monospace",
      fontWeight: "bold",
      marginLeft:15,
      padding:10
   },

 

   btn:{
      width: '90%',
      marginTop:15,
      marginLeft: 18,
      marginBottom: 10,      
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
   },

   appButtonText:{
      fontSize:25,
      color:"white",
      textAlign:"center"
   },
})

export default styles