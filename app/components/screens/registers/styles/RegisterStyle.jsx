import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   background:{
      flex:1
   },
   container:{
      flex:1,
      width:"100%",
      heigth:"100%",
      justifyContent:"center",
      alignContent:"center",
   },
   inputR:{
      width:"90%",
      marginLeft:"20px",
      marginRight:"15px",
      padding:"10px",
      height:"40px",
      borderRadius:"5px",
      backgroundColor:"white",
      marginBottom: 5,
      paddingLeft: 10     
   },
   inputDoc:{
      width:"66%",
      height:'40px',
      paddingVertical: '10px',
      padding:"10px",
      borderRadius:"5px",
      backgroundColor:"white",
      marginLeft:'15px', 
   },
   inputDocNum:{
      width:"120%",
      height: '40px',
      paddingVertical:"20px",
      padding:"10px",
      borderRadius:"5px",     
      backgroundColor:"white",
      paddingLeft: 10    
   },
   docContainer:{
      width:'94%',
      height: 10,
      flex:1,
      flexDirection: 'row',
      marginBottom: -230
   },
   doc:{
      flex:1,
      flexDirection:'column'
   },
   docN:{
      marginRight:'25px'
   },
   label:{
      marginLeft:"20px",
      color:"#f0f3bd",
      fontSize:20
   },
   btn:{
      marginTop:"50px",
      width:'100%',
      height: '60px',
      backgroundColor: "#DDDDDD"
   },
   error:{
      marginLeft:"20px",
      color:"red",
      fontSize:20 
   },
   birth:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 5
   },
   date:{
      width:'25%',
      height: '40px',
      borderRadius: '5px',
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
      borderRadius: '5px'
   },
   inputSubStreet:{
      width:'30%',
      height: 40,
      backgroundColor:'white',
      borderRadius:'5px',
      marginRight:20,
      paddingLeft: 10
   },
   appButtonContainer: {
      width: '90%',
      marginLeft: '20px',
      marginBottom: '10px',
      marginTop: '20px',
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
   },
   appButtonContainerFalse: {
      width: '90%',
      marginLeft: '20px',
      marginBottom: '10px',
      marginTop: '20px',
      elevation: 8,
      backgroundColor: "#001829",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
   },
   appButtonText: {
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
   color:"white",
   fontWeight: '8',
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