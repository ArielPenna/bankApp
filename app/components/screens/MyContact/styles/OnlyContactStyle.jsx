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
      padding:5
   },


   titulo:{
      fontSize:20,
      fontFamily: "monospace",
      fontWeight: "bold",
      marginLeft:15,
      padding:5
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
   ico:{    
      alignSelf:"center",
      width:50,
      height:50    
  },
   touch: {
      alignItems: "center",
      backgroundColor: "#f7b700",
      padding: 10,    
      margin: 10, 
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,  
      width:167
  },
   small: {
      fontSize: 25,
      fontWeight: "bold"
  },

   button: {    
      backgroundColor: "#f7b700",    
      justifyContent:"space-around",
      alignItems:"center",    
      borderRadius: 2,
      height:35
  },
  buttonText: {
      color: "#752667",        
      justifyContent:"space-around",
      alignItems:"center",
      fontWeight: "bold",      
  }
})

export default styles