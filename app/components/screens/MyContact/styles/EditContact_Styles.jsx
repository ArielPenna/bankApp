import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignContent:"center",    
      justifyContent: "center",
      alignItems: "center",    
    },
   containerInput:{
      backgroundColor:"#ECE8AF",
      width:340,
      height:430,
      borderRadius:15,
      shadowOpacity: 0.57,
      shadowRadius: 15.19,
      elevation: 23,
   },
   title:{
      textAlign: "center",
      fontSize:35,
      color:"black",
      padding:5,
      marginBottom:44,
      marginTop:73,
      marginTop:100
   },
   input:{
      width:296,
      height:55,
      marginLeft: 17,
      borderRadius: 15,
      marginBottom: 30,
      backgroundColor:"#8F958B",
      fontSize: 25,
      textAlign: 'center',
      color:"white"
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
   textBtn:{
      fontSize:20,
      color:"#fff",
      textAlign:'center'
   }

})

export default styles