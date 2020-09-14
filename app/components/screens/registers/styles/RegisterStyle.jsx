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
      marginBottom: 5     
   },
   inputDoc:{
      width:"66%",
      height:'40px',
      paddingVertical: '10px',
      padding:"10px",
      borderRadius:"5px",
      backgroundColor:"white",
      marginLeft:'15px' 
   },
   inputDocNum:{
      width:"120%",
      height: '40px',
      paddingVertical:"20px",
      padding:"10px",
      borderRadius:"5px",     
      backgroundColor:"white"    
   },
   docContainer:{
      width:'94%',
      height: 10,
      flex:1,
      flexDirection: 'row',
      marginBottom: -280
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
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: -290
   },
   date:{
      width:'25%',
      height: '40px',
      borderRadius: '5px'
   },
   adressContainer:{
      flex:1,
      flexDirection: 'column',
      marginBottom: -200
   },
   streetPrincipal:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft:20
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
      marginRight:20
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
   }
})

export default styles