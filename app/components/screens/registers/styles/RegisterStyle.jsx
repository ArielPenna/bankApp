import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   background:{
      flex:1
   },
   container:{
      flex:1,
      width:"100%",
      // height:"100%",
      justifyContent:"center",
      alignContent:"center",
   },
   inputR:{
      width:"90%",
      marginLeft:20,
      marginRight:15,
      padding:10,
      height:40,
      borderRadius:2,
      backgroundColor:"white",
      marginBottom: 5,
      paddingLeft: 10     
   },
   inputDoc:{
      width:"66%",
      height:40,
      paddingVertical: 10,
      padding:10,
      borderRadius:2,
      backgroundColor:"white",
      marginLeft:15, 
   },
   inputDocNum:{
      width:"120%",
      height: 40,
      paddingVertical:20,
      padding:20,
      borderRadius:2,     
      backgroundColor:"white",
      paddingLeft: 10    
   },
   docContainer:{
      width:'94%',
      height: 10,
      flex:1,
      flexDirection: 'row',
      marginBottom: -200
   },
   doc:{
      flex:1,
      flexDirection:'column'
   },
   docN:{
      marginRight:25
   },
   label:{
      marginLeft:20,
      color:"#f0f3bd",
      fontSize:20
   },
   btn:{
      marginTop:50,
      width:'100%',
      height: 60,
      backgroundColor: "#DDDDDD"
   },
   error:{
      marginLeft:20,
      color:"red",
      fontSize:20 
   },
   birth:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 5,
   },
   date:{
      width:'25%',
      height: '40px',
      borderRadius: 2,
      paddingLeft:20
   },
   adressContainer:{
      flex:1,
      flexDirection: 'column',
      marginBottom: -30
   },
   streetPrincipal:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft:20,
      marginBottom:10
   },
   inputStreet:{
      width: '60%',
      height: '40px',
      backgroundColor: 'white',
      borderRadius: 2
   },
   inputSubStreet:{
      width:'30%',
      height: 40,
      backgroundColor:'white',
      borderRadius:2,
      marginRight:20,
      paddingLeft: 10
   },
   appButtonContainer: {
      width: '90%',
      marginLeft:20,
      marginBottom:10,
      marginTop:20,
      elevation: 8,
      backgroundColor: "#f7b700",
      borderRadius: 2,
      paddingVertical: 10,
      paddingHorizontal: 12
   },
   appButtonContainerFalse: {
      width: '90%',
      marginLeft:20,
      marginBottom:10,
      marginTop:20,
      elevation: 8,
      backgroundColor: "#752667",       
      borderRadius: 2,
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
   },
   subLabel:{
      color:"#f0f3bd",
      fontSize:15,
      marginLeft:20
   },
   mainTitle:{
   fontSize: 40,
   color:"#fff",
   fontWeight: "bold",
   textAlign:"center",
   marginTop: 30,
   marginBottom: 10
   },
   locationX:{
      textAlign:'center',
      fontSize: 25,
      color:'yellow',
      position: 'relative',
      bottom: 35
   },
   locationY:{
      textAlign:'center',
      fontSize: 15,
      color:"#f7b700",
      position: 'relative',
      bottom: 35
   }
})

export default styles