import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex:1
   },

   title:{
      textAlign: "center",
      fontSize:35,
      color:"#fff",
      padding:5,
      marginBottom:10
   },

   searchContainer: {
      flexDirection: 'row',
      backgroundColor:"#C2C8E2",
      borderRadius:15,
      width:327,
      marginLeft:21
   },

   inputStyle: {
      flex: 1,
      marginLeft:10,
      fontSize:25,
      color:"black",
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
      fontSize:20,
      color:"#fff",
      textAlign:"center"
   },

   cardTitle:{
      fontSize:25
   },

   cardText:{
      fontSize:20,
      textAlign:"center"
   },

})

export default styles